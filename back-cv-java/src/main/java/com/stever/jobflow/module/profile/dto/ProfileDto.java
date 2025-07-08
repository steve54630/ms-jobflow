package module.profile.dto;

import core.enums.CVProfileFields;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProfileDto {

    private CVProfileFields select;
    private Object value;
    private String id;
    private int sub;

}
