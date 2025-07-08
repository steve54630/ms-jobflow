package module.activities.dto;

import core.classes.Activity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddActivityDto {

    private String id;
    private int sub;
    private Activity activity;
}
