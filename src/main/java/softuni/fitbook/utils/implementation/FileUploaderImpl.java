package softuni.fitbook.utils.implementation;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.utils.FileUploader;

import java.io.IOException;
import java.util.Map;

public class FileUploaderImpl extends Cloudinary implements FileUploader {

    public FileUploaderImpl(Map config) {
        super(config);
    }

    public String getUploadedFileUrl(String folderName, String fileName, MultipartFile file) {

        Map params = ObjectUtils.asMap(
                "public_id", folderName + "/" + fileName,
                "overwrite", true
        );

        Map uploadResult = null;
        try {
            uploadResult = super.uploader().upload(file.getBytes(), params);
        } catch (IOException e) {
        }

        System.out.println();
        return (String) uploadResult.get("url");

    }
}
