package softuni.fitbook.service.implementation;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import softuni.fitbook.domain.entities.MealFood;
import softuni.fitbook.domain.models.service.dietPlan.DietPlanMealServiceModel;
import softuni.fitbook.domain.models.service.dietPlan.DietPlanServiceModel;
import softuni.fitbook.domain.models.service.meal.MealFoodServiceModel;
import softuni.fitbook.domain.models.service.meal.MealServiceModel;
import softuni.fitbook.domain.models.service.workout.WorkoutExerciseServiceModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanServiceModel;
import softuni.fitbook.domain.models.service.workoutPlan.WorkoutPlanWorkoutServiceModel;
import softuni.fitbook.service.FileExporterService;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;

@Service
public class FileExporterServiceImpl implements FileExporterService {

    @Override
    public byte[] exportWorkoutPlanToExcel(WorkoutPlanServiceModel model) {

        Workbook workbook = new XSSFWorkbook();

        Sheet sheet = workbook.createSheet("Workout Plan");


        makeMainHeader(workbook, sheet, model.getName(), 3);

        int lastRow = 1;

        if (model.getWorkouts().isEmpty()) {
            makeSubHeader(workbook,
                    sheet,
                    "No added workouts in this workout plan.",
                    lastRow++,
                    3,
                    14);
        } else {

            for (WorkoutPlanWorkoutServiceModel workout : model.getWorkouts()) {


                makeSubHeader(workbook,
                        sheet,
                        workout.getOrderIndex() + ". " + workout.getWorkout().getName(),
                        lastRow++,
                        3,
                        14);

                if (workout.getWorkout().getExercises().isEmpty()) {
                    makeSubHeader(workbook,
                            sheet,
                            "No added exercises in this workout",
                            lastRow++,
                            3,
                            12);
                } else {

                    makeRow(workbook, sheet, lastRow++, 3,
                            "Order", "Exercise", "Reps", "Sets");

                    for (WorkoutExerciseServiceModel exercise : workout.getWorkout().getExercises()) {
                        makeRow(workbook,
                                sheet,
                                lastRow++,
                                3,
                                exercise.getOrderIndex().toString(),
                                exercise.getExercise().getName(),
                                exercise.getReps().toString(),
                                exercise.getSets().toString());
                    }


                }


            }


        }

        sheet.setColumnWidth(0, 3000);
        sheet.setColumnWidth(1, 7000);
        sheet.setColumnWidth(2, 4000);
        sheet.setColumnWidth(3, 4000);

        return createFile(workbook, model.getId());
    }

    @Override
    public byte[] exportDietPlanToExcel(DietPlanServiceModel model) {

        Workbook workbook = new XSSFWorkbook();

        Sheet sheet = workbook.createSheet("Diet Plan");


        makeMainHeader(workbook, sheet, model.getName(), 5);

        int lastRow = 1;

        if (model.getMeals().isEmpty()) {
            makeSubHeader(workbook,
                    sheet,
                    "No added meals in this diet plan.",
                    lastRow++,
                    5,
                    14);
        } else {

            for (DietPlanMealServiceModel meal : model.getMeals()) {


                makeSubHeader(workbook,
                        sheet,
                        meal.getOrderIndex() + ". " + meal.getMeal().getName(),
                        lastRow++,
                        5,
                        14);

                if (meal.getMeal().getFoods().isEmpty()) {
                    makeSubHeader(workbook,
                            sheet,
                            "No added foods in this meal",
                            lastRow++,
                            5,
                            12);
                } else {

                    makeRow(workbook, sheet, lastRow++, 5,
                            "Food name", "Serving", "Protein", "Carbohydrates", "Fats", "Calories");

                    for (MealFoodServiceModel mealFood : meal.getMeal().getFoods()) {
                        makeRow(workbook,
                                sheet,
                                lastRow++,
                                5,
                                mealFood.getFood().getName(),
                                mealFood.getServing() + " g.",
                                mealFood.getProteinPerServing() + " g.",
                                mealFood.getCarbohydratesPerServing() + " g.",
                                mealFood.getFatsPerServing() + " g.",
                                mealFood.getCaloriesPerServing().toString());
                    }

                    makeSubHeader(workbook, sheet, "Total: ", lastRow, 1, 14);


                }


            }


        }

        sheet.setColumnWidth(0, 7000);
        sheet.setColumnWidth(1, 4000);
        sheet.setColumnWidth(2, 4000);
        sheet.setColumnWidth(3, 4000);
        sheet.setColumnWidth(4, 4000);
        sheet.setColumnWidth(5, 4000);

        return createFile(workbook, model.getId());
    }

    private byte[] createFile(Workbook workbook, String id) {
        File excelFile;
        try {
            excelFile = File.createTempFile(id, "xlsx");

            FileOutputStream fileOutputStream = new FileOutputStream(excelFile);

            workbook.write(fileOutputStream);
            fileOutputStream.close();

            return Files.readAllBytes(excelFile.toPath());
        } catch (IOException ignored) {

        }

        return null;
    }

    private void setAlignmentStyle(CellStyle cellStyle) {
        cellStyle.setAlignment(HorizontalAlignment.CENTER);
        cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
    }

    private void setBorderStyle(CellStyle cellStyle) {
        cellStyle.setBorderBottom(BorderStyle.THIN);
        cellStyle.setBottomBorderColor(IndexedColors.BLACK.getIndex());
        cellStyle.setBorderLeft(BorderStyle.THIN);
        cellStyle.setLeftBorderColor(IndexedColors.BLACK.getIndex());
        cellStyle.setBorderRight(BorderStyle.THIN);
        cellStyle.setRightBorderColor(IndexedColors.BLACK.getIndex());
        cellStyle.setBorderTop(BorderStyle.THIN);
        cellStyle.setTopBorderColor(IndexedColors.BLACK.getIndex());
    }

    private void makeMainHeader(Workbook workbook, Sheet sheet, String value, int cols) {

        CellStyle headerRowStyle = getRowStyle(workbook);

        Row headerRow = sheet.createRow(0);
        headerRow.setRowStyle(headerRowStyle);

        mergeCells(sheet, 0, cols);

        headerRow.setHeight((short) 700);

        CellStyle headerRowCellStyle = getHeaderRowCellStyle(workbook, 16);

        for (int i = 0; i <= cols; i++) {

            Cell cell = headerRow.createCell(i);
            cell.setCellStyle(headerRowCellStyle);

            if (i == 0) {
                cell.setCellValue(value);
            }

        }


    }

    private void makeSubHeader(Workbook workbook, Sheet sheet, String value, int row, int cols, int fontSize) {

        CellStyle rowStyle = getRowStyle(workbook);

        Row headerRow = sheet.createRow(row);
        headerRow.setRowStyle(rowStyle);

        mergeCells(sheet, row, cols);

        headerRow.setHeight((short) 500);

        CellStyle headerRowCellStyle = getSubHeaderRowCellStyle(workbook, fontSize);

        for (int i = 0; i <= cols; i++) {

            Cell cell = headerRow.createCell(i);
            cell.setCellStyle(headerRowCellStyle);

            if (i == 0) {
                cell.setCellValue(value);
            }

        }

    }

    private void makeRow(Workbook workbook, Sheet sheet, int row, int cols, String... values) {

        CellStyle rowStyle = getRowStyle(workbook);

        Row sheetRow = sheet.createRow(row);
        sheetRow.setRowStyle(rowStyle);

        sheetRow.setHeight((short) 500);

        CellStyle headerRowCellStyle = getRowCellStyle(workbook);

        for (int i = 0; i <= cols; i++) {

            Cell cell = sheetRow.createCell(i);
            cell.setCellStyle(headerRowCellStyle);

            try {
                int number = Integer.parseInt(values[i]);
                cell.setCellValue(number);
            } catch (NumberFormatException ex) {
                cell.setCellValue(values[i]);
            }
        }

    }

    private CellStyle getHeaderRowCellStyle(Workbook workbook, int fontSize) {

        CellStyle cellStyle = workbook.createCellStyle();
        cellStyle.setFillForegroundColor(IndexedColors.GREY_40_PERCENT.getIndex());
        cellStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        cellStyle.setFont(getHeaderFont(workbook, fontSize));
        setAlignmentStyle(cellStyle);
        setBorderStyle(cellStyle);

        return cellStyle;

    }

    private CellStyle getSubHeaderRowCellStyle(Workbook workbook, int fontSize) {

        CellStyle cellStyle = workbook.createCellStyle();
        cellStyle.setFont(getHeaderFont(workbook, fontSize));
        setAlignmentStyle(cellStyle);
        setBorderStyle(cellStyle);

        return cellStyle;

    }

    private CellStyle getRowCellStyle(Workbook workbook) {

        CellStyle cellStyle = workbook.createCellStyle();
        cellStyle.setFont(getRowFont(workbook));
        setAlignmentStyle(cellStyle);
        setBorderStyle(cellStyle);

        return cellStyle;

    }

    private Font getRowFont(Workbook workbook) {

        Font headerFont = workbook.createFont();
        headerFont.setFontHeightInPoints((short) 12);
        headerFont.setFontName("Arial");
        return headerFont;

    }

    private CellStyle getRowStyle(Workbook workbook) {

        CellStyle cellStyle = workbook.createCellStyle();
        setAlignmentStyle(cellStyle);

        return cellStyle;
    }

    private Font getHeaderFont(Workbook workbook, int fontSize) {
        Font headerFont = workbook.createFont();
        headerFont.setBold(true);
        headerFont.setFontHeightInPoints((short) fontSize);
        headerFont.setFontName("Arial");
        return headerFont;
    }

    private void mergeCells(Sheet sheet, int row, int col) {

        sheet.addMergedRegion(new CellRangeAddress(
                row, //first row (0-based)
                row, //last row (0-based)
                0, //first column (0-based)
                col //last column (0-based)
        ));
    }
}
