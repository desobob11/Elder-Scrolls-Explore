import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { fontSizes } from '../../consts/fontSizes';
import Header from '../../Components/Header/Header';
import ScrollButton from '../../Components/ScrollButton/ScrollButton';
import axios from "axios"
import { urls, hostname, port } from '../../consts/nodeURLs';
import Creatures from '../../Pages/Creatures/Creatures';

// TODO: URL for creatures view wil be dynamic. Could use props for this
const Test = () => {

    return (
        <Creatures url={urls.creatureTypes} header="creatures" body={"Categories of beasts and bots that roam the Isle of Vvardenfell."}>


        </Creatures>
    );
}



export default Test;


