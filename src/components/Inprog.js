/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cx from 'classnames';

import styles from './Inprog.module.scss';

export default function Inprog(props) {
  return (
    <div
      className={`inprog ${cx(styles.content_box, styles.content_box_layout)}`}>
      <h1 className={cx(styles.in_progress, styles.in_progress_layout)}>
        {'In progress'}
      </h1>
      <div className={cx(styles.content_box_row)}>
        <article
          className={cx(styles.content_box1, styles.content_box1_layout)}>
          <h5 className={cx(styles.mobile_view, styles.mobile_view_layout)}>
            {'Mobile view'}
          </h5>
          <div className={cx(styles.content_box1_row)}>
            <div
              className={cx(
                styles.paragraph_body,
                styles.paragraph_body_layout
              )}>
              {
                'Functions for both web responsive and native apps. Note: Android and iOS will need unique share icons.'
              }
            </div>
          </div>
        </article>
      </div>
      <div className={cx(styles.content_box_row)}>
        <article
          className={cx(styles.content_box2, styles.content_box2_layout)}>
          <h5 className={cx(styles.desktop_view, styles.desktop_view_layout)}>
            {'Desktop view'}
          </h5>
          <div className={cx(styles.content_box2_row)}>
            <div
              className={cx(
                styles.paragraph_body,
                styles.paragraph_body_layout
              )}>
              {
                'PWA for website and native apps. Note: Windows and Mac will need unique share icons.'
              }
            </div>
          </div>
        </article>
      </div>
      <div className={cx(styles.content_box_row2)}>
        <article
          className={cx(styles.content_box3, styles.content_box3_layout)}>
          <h5
            className={cx(
              styles.formatting_options,
              styles.formatting_options_layout
            )}>
            {'Formatting options'}
          </h5>
          <div className={cx(styles.content_box3_row)}>
            <div
              className={cx(
                styles.paragraph_body,
                styles.paragraph_body_layout2
              )}>
              {
                'Mobile formatting bar expands and collapses when tapping the format icon.'
              }
            </div>
          </div>
        </article>
      </div>
      <div className={cx(styles.content_box_row3)}>
        <div className={cx(styles.content_box4, styles.content_box4_layout)}>
          <h5 className={cx(styles.highlights, styles.highlights_layout)}>
            {'Media in note'}
          </h5>
          <div className={cx(styles.text_body, styles.text_body_layout)}>
            {'Image & video with player UI'}
          </div>
          <div className={cx(styles.content_box4_row)}>
            <div className={cx(styles.group, styles.group_layout)}>
              {'Note interface'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Inprog.inStorybook = true;
