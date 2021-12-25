/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import KanbanboardService from 'services/kanbanboardService';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import styles from './Backlog.module.scss';



export default function Backlog(props) {
  let textInput = React.createRef();

  const [backlogs, setBacklogs] = useState(props.props);  

  useEffect(() => {
    setBacklogs(props.props);
  }, [props.props]);

  

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(backlogs);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setBacklogs(items);
  }

   async function handleAddCard(cardDescription) {
    let kanbanboardService = new KanbanboardService();
    let result =  await kanbanboardService.addNewcard(cardDescription, 1);
    let newId = await result;
    //console.log(newId);
    let newCard = {
      id: newId, CardDescription: cardDescription,
      TaskList_Id: 1
    }
    const array = Array.from(backlogs);
    const newArray = array.concat(newCard);
    setBacklogs(newArray);
    console.log(newArray);

  }

  function handleRemove(id) {
    const newList = backlogs.filter((item) => item.id !== id);
    setBacklogs(newList);
    let kanbanboardService = new KanbanboardService();
    kanbanboardService.deleteCard(id);
  }



  return (

    <div
      className={`backlog ${cx(
        styles.content_box,
        styles.content_box_layout
      )}`}>
      <h1 className={cx(styles.backlog, styles.backlog_layout)}>{'Backlog'}</h1>


      <div className={cx(styles.content_box_row1)} >
        <div className={cx(styles.content_box2, styles.content_box2_layout)} >
          <h5
            className={cx(
              styles.markdown_support,
              styles.markdown_support_layout
            )} >
            <div><label >New Card</label>
              <input type="text" ref={textInput} id="fname" name="firstname" placeholder="Card detail.." />
              <input type="submit" value="Add Card" onClick={event => handleAddCard(textInput.current.value)} />

            </div>

          </h5>
          <div className={cx(styles.text_body, styles.text_body_layout)} >
          </div>

        </div>
      </div>

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId='cards'>
          {(provided) => (
            <div className='newCard' {...provided.droppableProps} ref={provided.innerRef}>
              {backlogs.map((cards, index) => {

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
                            <IconButton aria-label="delete" onClick={() => { handleRemove(cards.id) }}>
                              <DeleteIcon />
                            </IconButton>
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

Backlog.inStorybook = true;


/*<DragDropContext>
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
      </DragDropContext>*/