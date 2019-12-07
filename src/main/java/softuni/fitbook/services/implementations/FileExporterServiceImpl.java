package softuni.fitbook.services.implementations;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import softuni.fitbook.services.models.dietPlan.DietPlanMealServiceModel;
import softuni.fitbook.services.models.dietPlan.DietPlanServiceModel;
import softuni.fitbook.services.models.meal.MealFoodServiceModel;
import softuni.fitbook.services.models.workout.WorkoutExerciseServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanServiceModel;
import softuni.fitbook.services.models.workoutPlan.WorkoutPlanWorkoutServiceModel;
import softuni.fitbook.services.FileExporterService;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

@Service
public class FileExporterServiceImpl implements FileExporterService {

    private static final String LOGO_FILE_PATH = System.getProperty("user.dir") + "/src/main/resources/static/assets/static/images/logo.png";

    @Override
    public byte[] exportWorkoutPlanToExcel(WorkoutPlanServiceModel model) {

        Workbook workbook = new XSSFWorkbook();

        Sheet sheet = workbook.createSheet("Workout Plan");

        makeMainHeader(workbook, 0, sheet, model.getName(), 3);

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

                    makeRow(workbook, sheet, lastRow++, 0, 3,
                            "Order", "Exercise", "Reps", "Sets");

                    for (WorkoutExerciseServiceModel exercise : workout.getWorkout().getExercises()) {
                        makeRow(workbook,
                                sheet,
                                lastRow++,
                                0,
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
        sheet.setColumnWidth(5, 5500);
        sheet.setColumnWidth(6, 5500);

        attachImageToFile(workbook, sheet, 4);

        return createFile(workbook, model.getId());
    }

    private void attachImageToFile(Workbook workbook, Sheet sheet, int col) {


        try {
            byte[] logoBytes = Files.readAllBytes(Paths.get(LOGO_FILE_PATH));

            final CreationHelper helper = workbook.getCreationHelper();
            final Drawing drawing = sheet.createDrawingPatriarch();

            final ClientAnchor anchor = helper.createClientAnchor();
            anchor.setAnchorType(ClientAnchor.AnchorType.MOVE_AND_RESIZE);


            final int pictureIndex =
                    workbook.addPicture(logoBytes, Workbook.PICTURE_TYPE_PNG);


            anchor.setCol1(col + 1);
            anchor.setRow1(2); // same row is okay
            anchor.setRow2(2);
            anchor.setCol2(col + 2);
            final Picture pict = drawing.createPicture(anchor, pictureIndex);
            pict.resize(2, 9);
        } catch (Exception ignored) {
        }


    }


    @Override
    public byte[] exportDietPlanToExcel(DietPlanServiceModel model) {

        Workbook workbook = new XSSFWorkbook();

        Sheet sheet = workbook.createSheet("Diet Plan");


        makeMainHeader(workbook, 0,  sheet, model.getName(), 5);

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

                    makeRow(workbook, sheet, lastRow++, 0, 5,
                            "Food name", "Serving", "Protein", "Carbohydrates", "Fats", "Calories");

                    for (MealFoodServiceModel mealFood : meal.getMeal().getFoods()) {
                        makeRow(workbook,
                                sheet,
                                lastRow++,
                                0,
                                5,
                                mealFood.getFood().getName(),
                                mealFood.getServing() + " g.",
                                mealFood.getProteinPerServing() + " g.",
                                mealFood.getCarbohydratesPerServing() + " g.",
                                mealFood.getFatsPerServing() + " g.",
                                mealFood.getCaloriesPerServing().toString());
                    }

                    Row sheetRow = makeSubHeader(workbook, sheet, "Total: ", lastRow++, 1, 12);

                    makeRow(workbook, sheet, sheetRow, 2, 5,
                            meal.getMeal().getTotalProtein() + " g.",
                            meal.getMeal().getTotalCarbohydrates() + " g.",
                            meal.getMeal().getTotalFats() + " g.",
                            meal.getMeal().getTotalCalories().toString());


                }


            }


        }

        String dietPlanTotal = String.format("Protein: %s g. | Carbohydrates: %s g. | Fats: %s g. | Calories: %s", model.getTotalProtein(), model.getTotalCarbohydrates(), model.getTotalFats(), model.getTotalCalories());

        makeMainHeader(workbook, lastRow++, sheet, "Diet Plan Nutrition Info"
                , 5);

        makeMainHeader(workbook, lastRow, sheet, dietPlanTotal
                , 5);

        sheet.setColumnWidth(0, 7000);
        sheet.setColumnWidth(1, 4000);
        sheet.setColumnWidth(2, 4000);
        sheet.setColumnWidth(3, 4800);
        sheet.setColumnWidth(4, 3500);
        sheet.setColumnWidth(5, 4000);
        sheet.setColumnWidth(7, 5500);
        sheet.setColumnWidth(8, 5500);


        attachImageToFile(workbook, sheet, 6);

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

    private void makeMainHeader(Workbook workbook, int row,  Sheet sheet, String value, int cols) {

        CellStyle headerRowStyle = getRowStyle(workbook);

        Row headerRow = sheet.createRow(row);
        headerRow.setRowStyle(headerRowStyle);

        mergeCells(sheet, row, cols);

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

    private Row makeSubHeader(Workbook workbook, Sheet sheet, String value, int row, int cols, int fontSize) {

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

        return headerRow;

    }

    private void makeRow(Workbook workbook, Sheet sheet, int row, int startCol, int endCol, String... values) {

        CellStyle rowStyle = getRowStyle(workbook);

        Row sheetRow = sheet.createRow(row);
        sheetRow.setRowStyle(rowStyle);

        sheetRow.setHeight((short) 500);

        CellStyle headerRowCellStyle = getRowCellStyle(workbook);

        createCells(startCol, endCol, sheetRow, headerRowCellStyle, values);

    }

    private void createCells(int startCol, int endCol, Row sheetRow, CellStyle headerRowCellStyle, String[] values) {
        int arrayCounter = 0;
        for (int i = startCol; i <= endCol; i++) {

            Cell cell = sheetRow.createCell(i);
            cell.setCellStyle(headerRowCellStyle);

            try {
                int number = Integer.parseInt(values[arrayCounter]);
                cell.setCellValue(number);
            } catch (NumberFormatException ex) {
                cell.setCellValue(values[arrayCounter]);
            }

            arrayCounter++;
        }
    }

    private void makeRow(Workbook workbook, Sheet sheet, Row sheetRow, int startCol, int endCol, String... values) {

        CellStyle rowStyle = getRowStyle(workbook);

        sheetRow.setRowStyle(rowStyle);

        sheetRow.setHeight((short) 500);

        CellStyle cellStyle = getSubHeaderRowCellStyle(workbook, 12);

        createCells(startCol, endCol, sheetRow, cellStyle, values);

    }

    private CellStyle getHeaderRowCellStyle(Workbook workbook, int fontSize) {

        CellStyle cellStyle = workbook.createCellStyle();
        cellStyle.setFillForegroundColor(IndexedColors.GREY_25_PERCENT.getIndex());
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
        headerFont.setFontName("Bahnschrift");
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
        headerFont.setFontName("Bahnschrift");
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
