package com.stever.jobflow.module.activities.service;

import com.stever.jobflow.core.CvSchema;
import com.stever.jobflow.core.classes.Activity;
import com.stever.jobflow.core.enums.CVFields;
import com.stever.jobflow.module.activities.dto.AddActivityDto;
import com.stever.jobflow.module.activities.dto.DeleteActivityDto;
import com.stever.jobflow.module.cvs.service.CvService;
import com.stever.jobflow.repository.CvRepositoryImpl;
import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor // Ici, ça fonctionne car le parent a un constructeur vide !
public class ActivityService extends CvRepositoryImpl<Activity, CVFields> {

    private final CvService cvService;

    public CvSchema addActivityToCv(AddActivityDto data) {
        // 1. Vérification de l'identité/ownership
        cvService.verifyOwnership(data.getId(), data.getSub());

        // 2. Sécurité sur la liste d'activités
        if (data.getActivity() == null || data.getActivity().isEmpty()) {
            throw new IllegalArgumentException("La liste d'activités est vide");
        }

        // 3. Appel de la méthode héritée de CvRepositoryImpl
        // On récupère le premier élément pour l'ajouter au champ ACTIVITIES
        Activity activityToAdd = data.getActivity().get(0);

        return appendToField(data.getId(), CVFields.ACTIVITIES, activityToAdd);
    }

    public CvSchema removeActivityFromCv(DeleteActivityDto data) {
        // 1. Sécurité : Vérifier que l'utilisateur possède bien le CV
        cvService.verifyOwnership(data.getId(), data.getSub());

        // 2. Logique métier : Retirer l'activité via son ID
        // On utilise la méthode héritée du repository
        return removeFromField(data.getId(), CVFields.ACTIVITIES, data.getActivityId());
    }
}