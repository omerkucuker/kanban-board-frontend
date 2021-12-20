/* This source code is exported from pxCode, you can get more document from https://www.pxcode.io */
import React from 'react';
import cx from 'classnames';

import styles from './Designed.module.scss';

export default function Designed(props) {
  return (
    <div
      className={`designed ${cx(
        styles.content_box,
        styles.content_box_layout
      )}`}>
      <h1 className={cx(styles.designed, styles.designed_layout)}>
        {'Designed'}
      </h1>
      <div className={cx(styles.content_box_row)}>
        <div className={cx(styles.content_box1, styles.content_box1_layout)}>
          <h5
            className={cx(
              styles.audio_recording,
              styles.audio_recording_layout
            )}>
            {'Audio recording'}
          </h5>
          <div className={cx(styles.content_box1_row)}>
            <div
              className={cx(
                styles.paragraph_body,
                styles.paragraph_body_layout
              )}>
              {'Interface for when recording a new audio note'}
            </div>
          </div>
          <div className={cx(styles.content_box1_row1)}>
            <div className={cx(styles.group, styles.group_layout)}>
              {'New note'}
            </div>
          </div>
        </div>
      </div>
      <div className={cx(styles.content_box_row)}>
        <div className={cx(styles.content_box2, styles.content_box2_layout)}>
          <h5 className={cx(styles.bookmarking, styles.bookmarking_layout)}>
            {'Bookmarking'}
          </h5>
          <div className={cx(styles.text_body, styles.text_body_layout)}>
            {'Interface for when creating a new link note.'}
          </div>
          <div className={cx(styles.content_box2_row)}>
            <div className={cx(styles.group, styles.group_layout1)}>
              {'New note'}
            </div>
          </div>
        </div>
      </div>
      <div className={cx(styles.content_box_row2)}>
        <article
          className={cx(styles.content_box3, styles.content_box3_layout)}>
          <h5 className={cx(styles.highlights, styles.highlights_layout)}>
            {'Mobile home screen'}
          </h5>
          <div className={cx(styles.content_box3_row)}>
            <div
              className={cx(
                styles.paragraph_body,
                styles.paragraph_body_layout1
              )}>
              {'Folders, tags, and notes lists are sorted by recent.'}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

Designed.inStorybook = true;
