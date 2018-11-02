/**
 * Mapping the Student search form to backend student model
 * @constant
 */
const studentSearchSchema = new Map();

studentSearchSchema.set("engName", "studentEnglishName");
studentSearchSchema.set("chiName", "studentChineseName");
studentSearchSchema.set("regNum", "registrationNo");
studentSearchSchema.set("strn", "strn");
studentSearchSchema.set("schLvl", "schoolLevel");
studentSearchSchema.set("schScc", "SchoolSession");
studentSearchSchema.set("classLvl", "ClassLevel");
studentSearchSchema.set("classCode", "ClassName");

export default studentSearchSchema;
