import * as React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Alert, TextInput, Title } from "react-native";
import * as profile from "./styles"
import { useAuth } from '../../contexts/auth';
//form
import { Field, Formik } from 'formik';
import { useFormik } from 'formik';
import { Picker } from '@react-native-community/picker'
import DateTimePicker from '@react-native-community/datetimepicker';
//icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
//Themes
import theme from "../../styles/index";
import Select from '../../components/select';
const { brandSecondary, brandSecondary2, primary, tertiary } = theme.light.colors;

interface IUser {
    weight: string;
    height: string;
    blood_type: string;
    blood_pressure_max: string;
    blood_pressure_min: string;
    glicemia: string;
}

const Profile: React.FC = ({ navigation }: any) => {
    const [hidePassword, setHidePassword] = React.useState(true);
    const [show, setShow] = React.useState(false);
    
    const { signOut, user } = useAuth();


    
    //Feedback on login 
    const [message, setMessage] = React.useState();
    const [messageType, setMessageType] = React.useState();
    //const [isSubmitting, setSubmitting] = useState();


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Formik
                initialValues= {{ weight: "", height: "", blood_type: "", blood_pressure_max: "", blood_pressure_min: "",glicemia: "" }}
                
                onSubmit={(values, { setSubmitting }) => {
                    values = { ...values}
                    if (
                        values.weight == '' ||
                        values.height == '' ||
                        values.blood_type == '' ||
                        values.blood_pressure_max == ''||
                        values.blood_pressure_min == '' ||
                        values.glicemia == '') {
                        //handleMessage('Please, fill all the fields');
                        setSubmitting(false);
                    } else {
                        //handleSignup(values, setSubmitting)
                    }
                    //console.log(values); navigation.navigate('home')
                }
                }
            >
                {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) =>
                (<profile.StyledFormArea>
                    <MyTextInput
                        label="Introduce weight"
                        icon="person"
                        placeholder="75"
                        placeholderTextColor={tertiary}
                        onChangeText={handleChange('weight')}
                        onBlur={handleBlur('weight')}
                        value={values.weight}
                        hidePassword={undefined}
                        setHidePassword={undefined} />
                    <MyTextInput
                        label="Introduce height"
                        icon="person"
                        placeholder="1,75"
                        placeholderTextColor={tertiary}
                        onChangeText={handleChange('height')}
                        onBlur={handleBlur('height')}
                        value={values.height}
                        hidePassword={undefined}
                        setHidePassword={undefined} />
                    <MyTextInput
                        label="Introduce blood type"
                        icon="pulse"
                        placeholder="A+"
                        placeholderTextColor={tertiary}
                        onChangeText={handleChange('blood_type')}
                        onBlur={handleBlur('blood_type')}
                        value={values.blood_type}
                        hidePassword={undefined}
                        setHidePassword={undefined} />
                    <MyTextInput
                        label="Introduce blood pressure max"
                        icon="pulse"
                        placeholder="200"
                        placeholderTextColor={tertiary}
                        onChangeText={handleChange('blood_pressure_max')}
                        onBlur={handleBlur('blood_pressure_max')}
                        value={values.blood_pressure_max}
                        hidePassword={undefined}
                        setHidePassword={undefined} />
                    <MyTextInput
                        label="Introduce blood pressure min"
                        icon="pulse"
                        placeholder="120"
                        placeholderTextColor={tertiary}
                        onChangeText={handleChange('blood_pressure_min')}
                        onBlur={handleBlur('blood_pressure_min')}
                        value={values.blood_pressure_min}
                        hidePassword={undefined}
                        setHidePassword={undefined} />
                    <MyTextInput
                        label="Introduce glicemia"
                        icon="pulse"
                        placeholder="normal"
                        placeholderTextColor={tertiary}
                        onChangeText={handleChange('glicemia')}
                        onBlur={handleBlur('glicemia')}
                        value={values.glicemia}
                        hidePassword={undefined}
                        setHidePassword={undefined} />
                    <profile.MessageBox type={messageType}>{message}</profile.MessageBox>
                    {!isSubmitting &&
                        <profile.StyledBotton onPress={() => handleSubmit()}>
                            <profile.BottonText>
                                Save
                            </profile.BottonText>
                        </profile.StyledBotton>}
                    {isSubmitting &&
                        <profile.StyledBotton disabled={true}>
                            <ActivityIndicator size="large" color={primary}>
                            </ActivityIndicator>
                        </profile.StyledBotton>}
                </profile.StyledFormArea>
                )}
            </Formik>
        </View>
    );
}

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props }) => {
    return (<View>
        <profile.LeftIcon><Text>
            <Octicons name={icon} size={30} color={primary} /></Text>
        </profile.LeftIcon>
        <profile.StyledInputLabel><Text>{label}</Text></profile.StyledInputLabel>
        {!isDate && <profile.StyledTextInput {...props} />}
        {isDate && (<TouchableOpacity onPress={showDatePicker}>
            <profile.StyledTextInput {...props} />
        </TouchableOpacity>)}
        {isPassword && (
            <profile.RightIcon onPress={() => setHidePassword(!hidePassword)}>
                <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={tertiary} />
            </profile.RightIcon>
        )}
    </View>);
};
export default Profile 