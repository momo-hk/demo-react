const schoolLevel = new Map(),
  schoolSession = new Map(),
  classLevel = new Map(),
  className = new Map();

const fillRange = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((item, index) => start + index);
};

const populateDate = () => {
  fillRange(1, 3).forEach((value, index) => {
    schoolLevel.set(value, `School Level - ${value}`);
  });

  fillRange(1, 3).forEach((value, index) => {
    schoolSession.set(value, `School Session - ${value}`);
  });

  fillRange(1, 6).forEach((value, index) => {
    classLevel.set(`P${value}`, `Class Level - P${value}`);
  });

  fillRange(1, 6).forEach((value, index) => {
    classLevel.set(`S${value}`, `Class Level - S${value}`);
  });

  fillRange(1, 6).forEach((value, index) => {
    className.set(value, `Class Name - ${value}A`);
  });
};

populateDate();

export const getStudentData = type =>
  ({
    schoolLevel,
    schoolSession,
    classLevel,
    className
  }[type]);

