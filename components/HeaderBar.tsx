import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBGIcon from '@/components/GradientBGIcon';
import ProfilePic from '@/components/ProfilePic';
import { COLORS, FONTSIZE, SPACING } from '@/constants/Colors';
import Foundation from '@expo/vector-icons/Foundation';


interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderContainer}>
      <GradientBGIcon>
          <Foundation name="die-four" size={24} color={COLORS.primaryLightGreyHex} />
        </GradientBGIcon>
      <Text style={styles.HeaderText}>{title}</Text>
      <ProfilePic />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderContainer: {
    padding: SPACING.space_30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderText: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryWhiteHex,
  },
});

export default HeaderBar;
