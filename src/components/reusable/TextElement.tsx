import React from 'react';
import {Text, StyleSheet} from 'react-native';

type TextElementProps = {
  style: any;
  children: string;
};

const TextElement: React.FC<TextElementProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <Text style={[styles.default, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Poppins',
  },
});

export default TextElement;
