package core.classes;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Experience {

    @Field("id")
    private Integer id;

    @JsonProperty("start_date")
    @Field("start_date")
    private Instant startDate;

    @JsonProperty("end_date")
    @Field("end_date")
    private Instant endDate;

    private String title;

    @JsonProperty("company_name")
    @Field("company_name")
    private String companyName;

    private String location;

    private String description;

}
