/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cx from 'classnames';

import styles from './Todo.module.scss';

export default function Todo(props) {
  return (
    <div
      className={`todo ${cx(styles.content_box, styles.content_box_layout)}`}>
      <h1 className={cx(styles.to_do, styles.to_do_layout)}>{'To do'}</h1>
      <div className={cx(styles.content_box_row)}>
        <div className={cx(styles.group, styles.group_layout)}>
          {'Tablet view'}
        </div>
      </div>
      <div className={cx(styles.content_box_row1)}>
        <div className={cx(styles.content_box1, styles.content_box1_layout)}>
          <h5 className={cx(styles.highlights, styles.highlights_layout)}>
            {'Audio recording in note'}
          </h5>
          <div className={cx(styles.text_body, styles.text_body_layout)}>
            {'Show audio in a note and playback UI'}
          </div>
          <div className={cx(styles.content_box1_row)}>
            <div className={cx(styles.group1, styles.group1_layout)}>
              {'Note interface'}
            </div>
          </div>
        </div>
      </div>
      <div className={cx(styles.content_box_row2)}>
        <div className={cx(styles.content_box2, styles.content_box2_layout)}>
          <h5 className={cx(styles.highlights, styles.highlights_layout)}>
            {'Bookmark in note'}
          </h5>
          <div className={cx(styles.content_box2_row)}>
            <div
              className={cx(
                styles.paragraph_body,
                styles.paragraph_body_layout
              )}>
              {
                'Show rich link UI in a note, and feature to render website screenshot.'
              }
            </div>
          </div>
          <div className={cx(styles.content_box2_row1)}>
            <div className={cx(styles.group2, styles.group2_layout)}>
              {'Note interface'}
            </div>
          </div>
        </div>
      </div>
      <div className={cx(styles.content_box_row3)}>
        <article
          className={cx(styles.content_box3, styles.content_box3_layout)}>
          <h5 className={cx(styles.image_viewer, styles.image_viewer_layout)}>
            {'Image viewer'}
          </h5>
          <div className={cx(styles.content_box3_row)}>
            <div
              className={cx(
                styles.paragraph_body,
                styles.paragraph_body_layout1
              )}>
              {
                'Opens when clicking on the thumbnail in the list or on the image in the note'
              }
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

Todo.inStorybook = true;
