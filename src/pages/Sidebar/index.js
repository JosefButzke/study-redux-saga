import React from 'react';

import { connect } from 'react-redux';

import * as CourseAction from '../../store/actions/course';

const Sidebar = ({ modules, toogleLesson }) => {
    return (
        <aside>
            {
                modules.map( modulo => (
                    <div key={modulo.id}>
                        <strong>{modulo.title}</strong>
                        <ul>
                            {
                                modulo.lessons.map(lesson => (
                                    <li key={lesson.id}>
                                        {lesson.title}
                                        <button onClick={() => toogleLesson(modulo, lesson)}>Selecionar</button>
                                    </li>
                                ))
                                }
                        </ul>
                    </div>
                ))
            }
        </aside>
    );
}

const mapStateToProps = state => ({
        modules: state.course.modules
});

const mapDispatchToProps = dispatch => ({
    toogleLesson: (module, lesson) => dispatch(CourseAction.toogleLesson(module, lesson))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);