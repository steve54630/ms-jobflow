package com.stever.jobflow.module.skills.service;

import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.classes.Skill;
import com.stever.jobflow.core.enums.CVFields;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.module.skills.dto.AddSkillDto;
import com.stever.jobflow.module.skills.dto.RemoveSkillDto;

import org.springframework.stereotype.Service;
import com.stever.jobflow.repository.CvRepositoryImpl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SkillService extends CvRepositoryImpl<Skill, CVFields> {

    private final CvService cvService;

    public CvSchema addSkillToCv(AddSkillDto data) {
        // 1. Orchestration de la sécurité
        cvService.verifyOwnership(data.getId(), data.getSub());

        // 2. Validation de la donnée
        if (data.getSkill() == null || data.getSkill().isEmpty()) {
            throw new IllegalArgumentException("La liste de skills ne peut pas être vide");
        }

        // 3. Logique métier : Ajout au champ SKILLS
        return appendToField(data.getId(), CVFields.SKILLS, data.getSkill().get(0));
    }

    public CvSchema removeSkillFromCv(RemoveSkillDto data) {
        // 1. Sécurité : Vérifier que l'utilisateur est bien le propriétaire
        cvService.verifyOwnership(data.getId(), data.getSub());

        // 2. Logique métier : Retrait de la compétence par son ID
        return removeFromField(data.getId(), CVFields.SKILLS, data.getSkillId());
    }
}
