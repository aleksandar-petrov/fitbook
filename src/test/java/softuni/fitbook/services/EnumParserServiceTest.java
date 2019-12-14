package softuni.fitbook.services;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import softuni.fitbook.base.BaseTest;
import softuni.fitbook.data.models.enumerations.Muscle;
import softuni.fitbook.web.errors.exceptions.NoSuchEnumException;

import static org.junit.jupiter.api.Assertions.*;

class EnumParserServiceTest extends BaseTest {

    @Test
    void parseStringToEnum_whenValidString_shouldReturnEnum() {

        Muscle anteriorDeltoid = EnumParserService.parseStringToEnum(Muscle.class, "anteriorDeltoid");

        assertEquals(anteriorDeltoid, Muscle.ANTERIOR_DELTOID);


    }

    @Test
    void parseStringToEnum_whenInvalidString_shouldThrowException() {



        assertThrows(NoSuchEnumException.class, () -> {
            EnumParserService.parseStringToEnum(Muscle.class, "unknown");
        });


    }

    @Test
    void parseEnumToString_whenValidEnum_shouldReturnStringToCamelCase() {

        String anteriorDeltoid = EnumParserService.parseEnumToString(Muscle.ANTERIOR_DELTOID);

        assertEquals(anteriorDeltoid, "anteriorDeltoid");
    }
}