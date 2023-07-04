import  { useState } from 'react';
import { Alert,View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { setarr1,setarr2,setarr3} from './setdata';
import { ScrollView } from 'react-native-gesture-handler';
let cnt=0;
const UpperDeck: React.FC = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSeatPress = (seat: string) => {
    // Check if the seat is already selected
    const index = selectedSeats.indexOf(seat);
    if (index === -1) {
      // Add the seat to the selectedSeats array
      if(cnt==5){
        Alert.alert('Only 5 seats can be selected')
      }
      else{
      setSelectedSeats([...selectedSeats, seat]);
      cnt++;
      }
    } else {
      // Remove the seat from the selectedSeats array
      const newSelectedSeats = [...selectedSeats];
      newSelectedSeats.splice(index, 1);
      setSelectedSeats(newSelectedSeats);
     cnt--;
    }  
    console.log(cnt);
  };
  return (
    <View>
      <ScrollView>
      <View style={styles.seatColumn1}>
        {setarr1.map((data:any, id:number)=>(
          <View key={id}>
            <TouchableOpacity
          style={[
            styles.seat,
            selectedSeats.includes(data.value) && styles.selectedSeat,
          ]}
          onPress={() => handleSeatPress(data.value)}     
        >
         <Text>{data.value}</Text>
        </TouchableOpacity>       
            </View>
        ))}
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  seatRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seatColumn1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:250,
    marginTop:50
  },
  seatColumn2: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:100,
    marginTop:-490
  },
  seatColumn3: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:-200,
    marginTop:-490
  },
  seat: {
    margin: 5,
    padding: 10,
    borderRadius: 7,
    borderColor:'#165eab',
    borderWidth:2
  },
  selectedSeat: {
    borderColor:'#00A833'
  },
  confirmButton: {
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UpperDeck;
