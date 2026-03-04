package com.stever.jobflow.module.experiences.service;

import org.springframework.stereotype.Service;

import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.classes.Experience;
import com.stever.jobflow.core.enums.CVFields;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.module.experiences.dto.AddExperienceDto;
import com.stever.jobflow.module.experiences.dto.RemoveExperienceDto;
import com.stever.jobflow.repository.CvRepositoryImpl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExperienceService extends CvRepositoryImpl<Experience, CVFields> {

    private final CvService cvService;

    public CvSchema addExperience(AddExperienceDto dto) {
        // Sécurité centralisée (cast sub en int comme attendu par CvService)
        cvService.verifyOwnership(dto.getId(), dto.getSub());

        if (dto.getExperience() == null || dto.getExperience().isEmpty()) {
            throw new IllegalArgumentException("La liste d'expériences est vide");
        }

        // Ajout via la méthode héritée du repo
        return appendToField(dto.getId(), CVFields.EXPERIENCES, dto.getExperience().get(0));
    }

    public CvSchema removeExperience(RemoveExperienceDto dto) {
        cvService.verifyOwnership(dto.getId(), dto.getSub());

        // Suppression via la méthode héritée du repo
        return removeFromField(dto.getId(), CVFields.EXPERIENCES, dto.getExperienceId());
    }
}