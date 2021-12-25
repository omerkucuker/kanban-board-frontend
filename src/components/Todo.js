/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from './Todo.module.scss';

export default function Todo(props) {
  const [todos, setTodos] = useState(props.props);  

  useEffect(() => {
    setTodos(props.props);
  }, [props.props]);

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTodos(items);
  }
  return (
    <div
      className={`todo ${cx(
        styles.content_box,
        styles.content_box_layout
      )}`}>
      <h1 className={cx(styles.backlog, styles.backlog_layout)}>{'To Do'}</h1>


      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='cards'>
          {(provided) => (
            <div className='newCard' {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((cards, index) => {

                return (
                  <Draggable key={'' + cards.id} draggableId={'' + cards.id} index={index}>
                    {(provided) => (
                      <div className={cx(styles.content_box_row1)} key={index} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <div className={cx(styles.content_box2, styles.content_box2_layout)} >
                          <h5
                            className={cx(
                              styles.markdown_support,
                              styles.markdown_support_layout
                            )} >
                            {cards.CardDescription}                           
                          </h5>
                          <div className={cx(styles.text_body, styles.text_body_layout)}>

                          </div>
                        </div>
                      </div>
                    )}

                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>

          )}

        </Droppable>
      </DragDropContext>
      
    </div>
  );
}

Todo.inStorybook = true;

/*
*/