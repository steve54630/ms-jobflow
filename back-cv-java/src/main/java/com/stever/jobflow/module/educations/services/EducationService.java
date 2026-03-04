package com.stever.jobflow.module.educations.services;

import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.classes.Education;
import com.stever.jobflow.core.enums.CVFields;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.module.educations.dto.AddEducationDto;
import com.stever.jobflow.module.educations.dto.RemoveEducationDto;

import org.springframework.stereotype.Service;
import com.stever.jobflow.repository.CvRepositoryImpl;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EducationService extends CvRepositoryImpl<Education, CVFields> {

    private final CvService cvService;

    public CvSchema addEducation(AddEducationDto dto) {
        // 1. Sécurité
        cvService.verifyOwnership(dto.getId(), dto.getSub());

        // 2. Validation & Extraction
        if (dto.getEducation() == null || dto.getEducation().isEmpty()) {
            throw new IllegalArgumentException("La liste d'éducations ne peut pas être vide");
        }

        // 3. Persistance via la méthode héritée
        return appendToField(dto.getId(), CVFields.EDUCATIONS, dto.getEducation().get(0));
    }

    public CvSchema removeEducation(RemoveEducationDto dto) {
        // 1. Sécurité
        cvService.verifyOwnership(dto.getId(), dto.getSub());

        // 2. Suppression via la méthode héritée
        return removeFromField(dto.getId(), CVFields.EDUCATIONS, dto.getEducationId());
    }
}