/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cx from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from './Backlog.module.scss';


export default function Backlog(props) {

  return (
    <div
      className={`backlog ${cx(
        styles.content_box,
        styles.content_box_layout
      )}`}>
      <h1 className={cx(styles.backlog, styles.backlog_layout)}>{'Backlog'}</h1>
      <DragDropContext>
        <Droppable key='id11' droppableId='droppable-1'>
          {(provided) => (
            <div className={cx(styles.content_box_row)} {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable key='id-1' draggableId="id1" >
                {(provided) => (
                  <article
                    className={cx(styles.content_box1, styles.content_box1_layout)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <h5
                      className={cx(
                        styles.twilio_integration,
                        styles.twilio_integration_layout
                      )}>
                      {'Twilio integration'}
                    </h5>
                    <div className={cx(styles.content_box1_row)}>
                      <div
                        className={cx(
                          styles.paragraph_body,
                          styles.paragraph_body_layout
                        )}>
                        {
                          'Create new note via SMS. Support text, audio, links, and media.'
                        }
                      </div>
                    </div>
                  </article>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <DragDropContext>
        <Droppable key='id22' droppableId='droppable-2'>
          {(provided) => (

            <div className={cx(styles.content_box_row1)} {...provided.droppableProps} ref={provided.innerRef}>
              <Draggable key='id-2' draggableId="id2" >
                {(provided) => (
                  <div className={cx(styles.content_box2, styles.content_box2_layout)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>

                    <h5
                      className={cx(
                        styles.markdown_support,
                        styles.markdown_support_layout
                      )}>
                      {'Markdown support'}
                    </h5>
                    <div className={cx(styles.text_body, styles.text_body_layout)}>
                      {'Markdown shorthand converts to formatting'}
                    </div>
                    <div className={cx(styles.content_box2_row)}>
                      <div className={cx(styles.group, styles.group_layout)}>
                        {'Formatting'}
                      </div>
                    </div>

                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div >
  );
}

Backlog.inStorybook = true;
