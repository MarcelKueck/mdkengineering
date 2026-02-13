'use client';

import { useState, useEffect } from 'react';
import styles from './TypingTitle.module.css';

const FULL_TEXT = 'I engineer AI into\nreal systems.';
const TYPING_SPEED = 55;
const START_DELAY = 600;

export default function TypingTitle() {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [doneTyping, setDoneTyping] = useState(false);

  useEffect(() => {
    let index = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const startTyping = () => {
      timeout = setTimeout(function type() {
        if (index < FULL_TEXT.length) {
          setDisplayedText(FULL_TEXT.slice(0, index + 1));
          index++;
          timeout = setTimeout(type, TYPING_SPEED);
        } else {
          setDoneTyping(true);
        }
      }, TYPING_SPEED);
    };

    const delay = setTimeout(startTyping, START_DELAY);

    return () => {
      clearTimeout(delay);
      clearTimeout(timeout);
    };
  }, []);

  // Blink cursor after typing is done
  useEffect(() => {
    if (!doneTyping) return;
    const interval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(interval);
  }, [doneTyping]);

  // Split text into lines for rendering
  const lines = displayedText.split('\n');

  return (
    <h1 className={styles.title}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
      <span className={`${styles.cursor} ${showCursor ? styles.cursorVisible : styles.cursorHidden}`}>|</span>
    </h1>
  );
}
