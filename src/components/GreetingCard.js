import { View , Text, ProgressViewIOSComponent , StyleSheet , Image } from "react-native";
import avatar from '../assets/Pika.png';

const GreetingCard = () => {
    const username = 'Pika'; //TODO: Make it dynamic after adding auth
    return (
        <View style={{width: 350, height: 200, backgroundColor: '#eee', borderRadius: 20, marginTop: -90}}>
            <View style={{width: 300, height: 20, backgroundColor: '#333', borderRadius: 10, marginTop: 20, marginLeft: 26}}></View>
            <Text style={styles.greetingHeading}>Hello, 
                <Text style={styles.greetingUsername}> {username}</Text>
            </Text>
            <Image source={avatar} style={{width: 250, height: 250, marginTop: -20, marginLeft: -25}}/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    
    greetingHeading: {
        color: '#29B1CC',
        fontSize: 40,
        marginLeft: 120,
        marginTop: 20,
    },
    greetingUsername: {
        color: '#FF8585',
        fontSize: 40,
    }
});


export default GreetingCard;