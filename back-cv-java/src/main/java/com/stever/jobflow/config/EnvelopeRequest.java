package config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class EnvelopeRequest<T> {

    private String pattern;
    private T data;
    private String id;
}
