package module.activities.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DeleteActivityDto {

    private String id;
    private int sub;
    private int activityId;
}
