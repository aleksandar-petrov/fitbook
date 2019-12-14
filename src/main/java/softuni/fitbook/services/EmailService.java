package softuni.fitbook.services;

public interface EmailService {
    void sendMessage(String to, String subject, String text);
}
