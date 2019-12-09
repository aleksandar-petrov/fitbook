package softuni.fitbook.services.implementations;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import softuni.fitbook.services.FileUploaderService;
import softuni.fitbook.web.errors.exceptions.UploadFailException;

import java.io.IOException;
import java.util.Map;

@Service
public class FileUploaderServiceImpl implements FileUploaderService {

    private final Cloudinary cloudinary;

    public FileUploaderServiceImpl(Cloudinary cloudinary) {
        this.cloudinary = cloudinary;
    }


    public String getUploadedFileUrl(String folderName, String fileName, MultipartFile file) {

        Map params = ObjectUtils.asMap(
                "public_id", folderName + "/" + fileName,
                "overwrite", true
        );

        Map uploadResult = null;
        try {
            uploadResult = cloudinary.uploader().upload(file.getBytes(), params);
        } catch (IOException e) {

            throw new UploadFailException(String.format("Error occurred while uploading image with name %s in %s folder.", fileName, folderName));
        }

        System.out.println();
        return (String) uploadResult.get("url");

    }
}