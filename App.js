import { template } from '@babel/core';
import React, { Component } from 'react';
import { Button, Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingTop: 15 }}>
          {/* SEARCH BAR */}
          <View style={{ marginHorizontal: 17, flexDirection: 'row' }}>
            <View style={{ position: 'relative', flex: 1 }}>
              <TextInput placeholder="What do you want to eat?" style={{ borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white' }} />
              <Image source={require('./icon/search.png')} style={{ position: 'absolute', top: 5, left: 12 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 18 }}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>

          {/* GOPAY */}
          <View style={{ marginHorizontal: 17, marginTop: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14 }}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Rp50.000</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./icon/pay.png')} />
                <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15 }}>Pay</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./icon/nearby.png')} />
                <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15 }}>Nearby</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./icon/topup.png')} />
                <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15 }}>Top Up</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./icon/more.png')} />
                <Text style={{ fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15 }}>More</Text>
              </View>
            </View>
          </View>

          {/* MAIN FEATURES */}
          <View style={{ marginHorizontal: 0, marginTop: 18 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 18 }}>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./icon/go-ride.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-RIDE</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./icon/go-car.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-CAR</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./icon/go-bluebird.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-BLUEBIRD</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./icon/go-send.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-SEND</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./icon/go-deals.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-DEALS</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./icon/go-pulsa.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-PULSA</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./icon/go-food.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>GO-FOOD</Text>
              </View>
              <View style={{ width: '25%', alignItems: 'center' }}>
                <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                  <Image source={require('./icon/go-more.png')} />
                </View>
                <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>MORE</Text>
              </View>
            </View>
          </View>

          {/* DIVIDER */}
          <View style={{ height: 17, backgroundColor: '#F2F2F4', marginTop: 20 }}></View>

          {/* NEWS SECTION*/}
          <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
            {/* header */}
            <View style={{ position: 'relative' }}>
              <Image source={require('./dummy/sepak-bola.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
              <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
              <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./logo/white.png')} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
              </View>
            </View>
            {/* keterangan */}
            <View style={{ paddingBottom: 20, paddingTop: 16, borderBottomColor: '#e8e9ed', borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>GO-NEWS</Text>
              <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 10 }}>Dimas Drajat selamatkan penalti Timnas U-23 kalahkan Brunei</Text>
              <TouchableOpacity style={{ backgroundColor: '#61A756', padding: 12, alignSelf: 'flex-end', borderRadius: 4 }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>READ</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* internal information */}
          <View style={{ padding: 16, paddingBottom: 0 }}>
            <View style={{ width: 60, height: 15 }}>
              <Image source={require('./logo/gojek.png')} />
            </View>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C', marginTop: 15, marginBottom: 20 }}>Complete your profile</Text>
            <View style={{ flexDirection: 'row', marginBottom: 16 }}>
              <View style={{ marginRight: 16 }}>
                <Image source={require('./dummy/facebook-connect.png')} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, color: '#4a4a4a', fontWeight: 'bold' }}>Connect with Facebook</Text>
                <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4a4a4a', width: '70%' }}>Login faster without verification code</Text>
              </View>
            </View>
            <TouchableOpacity style={{ backgroundColor: '#61A756', padding: 12, alignSelf: 'flex-end', borderRadius: 4 }}>
              <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>CONNECT</Text>
            </TouchableOpacity>
            {/* garis */}
            <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16 }}></View>
          </View>

          {/* GO FOOD BANNER SECTION */}
          <ScrollView style={{ padding: 16 }}>
            <View style={{ position: 'relative' }}>
              <Image source={require('./dummy/food-banner.jpg')} style={{ height: 170, width: '100%', borderRadius: 6 }} />
              <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
              <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                <Image source={require('./logo/white.png')} style={{ height: undefined, width: undefined, resizeMode: 'contain', flex: 1 }} />
              </View>
              <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingBottom: 16, justifyContent: 'space-between', paddingHorizontal: 16 }}>
                <View>
                  <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold', marginBottom: 8 }}>Free GO-FOOD vouchers</Text>
                  <Text style={{ fontSize: 10, color: 'white', fontWeight: '400' }}>Quick, bedore they run out!</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 12 }}>
                  <TouchableOpacity style={{ backgroundColor: '#61A756', padding: 12, alignSelf: 'stretch', borderRadius: 4 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCHER</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginBottom: 16, paddingBottom: 16 }}></View>
          </ScrollView>
        </ScrollView>

        {/* BOTTOM NAVIGATION */}
        <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./icon/home.png')} style={{ width: 26, height: 26 }} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Home</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./icon/order.png')} style={{ width: 26, height: 26 }} />
            <Text style={{ fontSize: 10, color: '#43AB4A', marginTop: 4 }}>Orders</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./icon/help.png')} style={{ width: 26, height: 26 }} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Help</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./icon/inbox.png')} style={{ width: 26, height: 26 }} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Inbox</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./icon/account.png')} style={{ width: 26, height: 26 }} />
            <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Account</Text>
          </View>
        </View>
      </View>
    );
  }
}

/**
 * atomic desain:
Terdiri dari 5 main features:
- atomic: komponen terkecil, berulang, bisa hidup sendiri (botton biasanya)
contoh: atom botton --> atom --> dipecah agar bisa doreuse
- molekul: gabungan dari atom2, isa 2 atau 3 atom disebut molekul
contoh: atom back button, title dan refresh -> molekul header
(atom dan molekul --> state less, sebisa mungkin bisa hidup tanpa state)
- organism (sudah memiliki sebuah fungsi --> gabungan dari bbrp molekul)
- template (bentuk yang selalu mirip)
- pages
 */

