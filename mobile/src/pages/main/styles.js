import styled from 'styled-components';

import {Dimensions} from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const AnnotationContainer = styled.View`
  alignitems: center;
  justifycontent: center;
  backgroundcolor: #fc6663;
  borderradius: 5;
  padding: 5px;
`;

const AnnotationText = styled.Text`
  fontsize: 14px;
  color: #fff;
`;

const NewButtonContainer = styled.TouchableHighlight`
  position: absolute;
  bottom: 54;
  left: 20;
  right: 20;
  alignself: center;
  borderradius: 5px;
  paddingvertical: 20px;
  backgroundcolor: #fc6663;
`;

const ButtonsWrapper = styled.View`
  position: absolute;
  bottom: 54;
  left: 20;
  right: 20;
`;

const CancelButtonContainer = styled.TouchableHighlight`
  alignself: stretch;
  borderradius: 5px;
  paddingvertical: 20px;
  backgroundcolor: #555;
  margintop: 20px;
`;

const SelectButtonContainer = styled.TouchableHighlight`
  alignself: stretch;
  borderradius: 5px;
  paddingvertical: 20px;
  backgroundcolor: #fc6663;
`;

const ButtonText = styled.Text`
  color: #fff;
  fontsize: 16px;
  textalign: center;
  fontweight: bold;
`;

const Marker = styled.Image`
  width: 60px;
  height: 60px;
  position: absolute;
  alignself: center;
  top: ${Dimensions.get('window').height / 2 - 60};
`;

const ModalContainer = styled.View`
  flex: 1;
  backgroundcolor: #fff;
`;

const ModalImagesListContainer = styled.View``;

const ModalImagesList = styled.ScrollView`
  paddinghorizontal: 20px;
  paddingtop: 20px;
`;

const ModalImageItem = styled.Image`
  height: 100px;
  width: 100px;
  marginright: 10px;
`;

const ModalButtons = styled.View`
  paddinghorizontal: 10px;
  paddingvertical: 5px;
  flexdirection: row;
  justifycontent: space-between;
`;

const CameraButtonContainer = styled.TouchableHighlight`
  paddingvertical: 20px;
  paddinghorizontal: 40px;
`;

const CancelButtonText = styled.Text`
  color: #333;
  fontsize: 18px;
  fontweight: bold;
`;

const ContinueButtonText = styled.Text`
  color: #fc6663;
  fontsize: 18px;
  fontweight: bold;
`;

const TakePictureButtonContainer = styled.TouchableHighlight`
  position: absolute;
  alignself: center;
  bottom: 20;
  width: 60px;
  height: 60px;
  backgroundcolor: #fff;
  borderradius: 30px;
  alignitems: center;
  justifycontent: center;
`;

const TakePictureButtonLabel = styled.View`
  width: 52px;
  height: 52px;
  borderradius: 26px;
  backgroundcolor: #fc6663;
`;

const DataButtonsWrapper = styled.View`
  flex: 1;
  alignitems: center;
  justifycontent: center;
  paddinghorizontal: 20px;
`;

const MarkerContainer = styled.View`
  width: 30px;
  height: 30px;
  alignitems: center;
  justifycontent: center;
  backgroundcolor: #fff;
  borderradius: 15px;
`;

const MarkerLabel = styled.View`
  width: 24px;
  height: 24px;
  borderradius: 12px;
  backgroundcolor: #7159c1;
`;

const Form = styled.View`
  flex: 1;
  margintop: 20px;
`;

const Input = styled.TextInput`
  paddinghorizontal: 20px;
  paddingvertical: 10px;
  borderradius: 5px;
  backgroundcolor: #fff;
  alignself: stretch;
  marginbottom: 10px;
  marginhorizontal: 20px;
  fontsize: 14px;
  borderwidth: 1px;
  bordercolor: #ccc;
`;

export {
  Container,
  AnnotationContainer,
  AnnotationText,
  NewButtonContainer,
  ButtonsWrapper,
  CancelButtonContainer,
  SelectButtonContainer,
  ButtonText,
  Marker,
  ModalContainer,
  ModalImagesListContainer,
  ModalImagesList,
  ModalImageItem,
  ModalButtons,
  CameraButtonContainer,
  CancelButtonText,
  ContinueButtonText,
  TakePictureButtonContainer,
  TakePictureButtonLabel,
  DataButtonsWrapper,
  MarkerContainer,
  MarkerLabel,
  Form,
  Input,
};
