package softuni.fitbook.service;

import com.google.common.base.CaseFormat;

public interface EnumParserService {

    static <E extends Enum<E>> E parseStringToEnum(Class<E> enumClass, String enumString) {
        return E.valueOf(enumClass,
                CaseFormat.LOWER_CAMEL.to(CaseFormat.UPPER_UNDERSCORE,
                enumString));
    }

    static <E extends Enum<E>> String parseEnumToString(E enumeration) {
        return CaseFormat.UPPER_UNDERSCORE.to(
                CaseFormat.LOWER_CAMEL, enumeration.name());
    }

}
