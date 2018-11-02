/**
 * Mapping student model field to table column name for display
 * @constant
 */
const studentDisplaySchema = new Map();

studentDisplaySchema.set("chiName", "Chinese Name");
studentDisplaySchema.set("engName", "English Name");
studentDisplaySchema.set("regNum", "Reg No");
studentDisplaySchema.set("strn", "STRN");
studentDisplaySchema.set("schLvl", "School Level");
studentDisplaySchema.set("schScc", "School Session");
studentDisplaySchema.set("classLvl", "Class Level");
studentDisplaySchema.set("classCode", "Class Name");

export default studentDisplaySchema;
