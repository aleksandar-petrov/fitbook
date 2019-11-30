package softuni.fitbook.service;

import com.google.common.base.CaseFormat;
import softuni.fitbook.web.errors.exceptions.NoSuchEnumException;

public interface EnumParserService {

    static <E extends Enum<E>> E parseStringToEnum(Class<E> enumClass, String enumString) {

        try {
            return E.valueOf(enumClass,
                    CaseFormat.LOWER_CAMEL.to(CaseFormat.UPPER_UNDERSCORE,
                            enumString));
        } catch (IllegalArgumentException ex) {

            throw new NoSuchEnumException("No such enumeration with given name.");
        }



    }

    static <E extends Enum<E>> String parseEnumToString(E enumeration) {
        return CaseFormat.UPPER_UNDERSCORE.to(
                CaseFormat.LOWER_CAMEL, enumeration.name());
    }

}
