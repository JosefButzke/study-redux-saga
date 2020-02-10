export const toogleLesson = (module, lesson) => {
    return {
        type: 'TOOGLE_LESSON',
        module,
        lesson
    };
}
