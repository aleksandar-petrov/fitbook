package softuni.fitbook.utils;


import org.springframework.web.multipart.MultipartFile;

public interface FileUploader {
    String getUploadedFileUrl(String folderName, String fileName,  MultipartFile file);
}
