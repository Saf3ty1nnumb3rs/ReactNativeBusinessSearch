import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer EfsNSXbr2JqJa8PZUOVNoWufMatC9xKAGui9Cv4Xmkh3C-ryTHi3gRWfYkpQYmNcbsJmCmHazGWyE5CA9tU9uzAej6vhXSEXOklbH2wAfWE_06TLze1U7e-4nb8jXnYx`
  }
})