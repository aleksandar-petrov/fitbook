package softuni.fitbook.services;


import org.springframework.web.multipart.MultipartFile;

public interface FileUploaderService {
    String getUploadedFileUrl(String folderName, String fileName,  MultipartFile file);
}
