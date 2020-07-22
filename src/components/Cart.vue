<template>
  <v-container>
    <p class="display-3 font-weight-light text-center pa-4">SHOPPING CART</p>
    <v-row>
      <v-col :cols="12" md="9" sm="12">
        <v-data-table :headers="headers" :items="desserts" item-key="id">
          <template v-slot:item="{ item }">
            <tr>
              <td>{{item.name}}</td>
              <td>{{item.calories}}</td>
              <td>{{item.carbs}}</td>
              <td>{{item.protein}}</td>
            </tr>
          </template>
          <template slot="body.append">
            <tr class="pink--text">
              <th class="title">Totals</th>
              <th class="title">${{ sumField('calories') }}</th>
              <th class="title">$-{{ sumField('carbs') }}</th>
              <th class="title">{{ sumField('protein') }} %</th>
            </tr>
          </template>
        </v-data-table>
      </v-col>
      <v-col :cols="12" md="3" sm="12" style="background-color: lightgray">
        <p class="headline">Order Summary</p>
        <p
          class="overline"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, similique?</p>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Order Subtotal</td>
                <td class="text-right" style="width: 50px;">$180.00</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td class="text-right" style="width: 50px;">(1%) $4.00</td>
              </tr>
              <tr>
                <td>Discount</td>
                <td class="text-right" style="width: 50px;">$30.00</td>
              </tr>
              <tr>
                <td class="font-weight-bold">Total</td>
                <td class="text-right font-weight-bold" style="width: 50px;">$154.00</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="text-center">
          <v-btn class="primary white--text mt-5" outlined>TAKE TO PAY</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Item Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Price", value: "calories" },
        { text: "Discount", value: "carbs" },
        { text: "Tax", value: "protein" }
      ],
      desserts: [
        {
          id: 1,
          name: "Lorem",
          calories: 159,
          carbs: 24,
          protein: 4.0
        },
        {
          id: 2,
          name: "Lorem Lorem Lorem",
          calories: 237,
          carbs: 37,
          protein: 4.3
        },
        {
          id: 3,
          name: "Lorem Lorem",
          calories: 262,
          carbs: 23,
          protein: 6.0
        }
      ]
    };
  },
  methods: {
    sumField(key) {
      return this.desserts.reduce((a, b) => a + (b[key] || 0), 0);
    }
  }
};
</script>

 <!-- <tbody>
              <td>
                <v-list-item key="1">
                  <v-list-item-avatar>
                    <v-img :src="require('../assets/img/product/pro-3.jpg')"></v-img>
                  </v-list-item-avatar>
                  <v-list-iteme-content>
                    <v-list-item-title>Hotel 1</v-list-item-title>
                    <v-list-item-subtitle>Lorem Ipsum</v-list-item-subtitle>
                  </v-list-iteme-content>
                </v-list-item>
              </td>
              <td>$120.00</td>
              <td>
                <v-text-field
                  class="pt-10"
                  label="Outlined"
                  style="width: 80px;"
                  single-line
                  outlined
                  value="2"
                  type="number"
                ></v-text-field>
              </td>
            </tbody> -->