import React, {Dispatch, FC, SetStateAction} from 'react';
import {Dimensions, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../Theme/Color';

interface Props {
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const BaseFooterModal: FC<Props> = ({
  modalVisible,
  setModalVisible,
  children,
  style,
}) => {
  const onCloseHandler = () => {
    setModalVisible(false);
  };
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={onCloseHandler}
      onBackButtonPress={onCloseHandler}
      backdropOpacity={0.8}
      onSwipeComplete={onCloseHandler}
      swipeDirection={['down']}
      statusBarTranslucent={true}
      deviceHeight={Dimensions.get("screen").height}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={true}
      style={styles.modalStyles}>
      <View style={[styles.viewContainer, style]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalStyles: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  viewContainer: {
    backgroundColor: colors.modalBg,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 15,
    paddingBottom: 19,
  },
});

export default BaseFooterModal;
