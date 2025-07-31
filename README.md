# iValidate - Email Validator

A modern, responsive web application for validating email addresses in real-time. Built with vanilla JavaScript, Bootstrap 5, and a sleek glassmorphism design.

![iValidate Demo](https://img.shields.io/badge/Status-Active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

## ✨ Features

- **Real-time Email Validation**: Instant validation using the EmailValidation.io API
- **Visual Status Indicators**: Color-coded results (✅ Valid, ⚠️ Risky, ❌ Invalid)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Glassmorphism effects with backdrop blur and smooth animations
- **Loading States**: Visual feedback during API requests
- **Detailed Results**: Comprehensive email information display

## 🚀 Demo

Simply enter an email address and click "Validate" to see:
- Email deliverability status
- Domain information
- Risk assessment
- Additional email metadata

## 📁 Project Structure

```
iValidate/
├── index.html          # Main HTML structure
├── js/
│   └── app.js         # JavaScript functionality
├── css/
│   └── style.css      # Custom styling
├── img/
│   ├── email.svg      # Logo icon
│   └── loading.svg    # Loading spinner
└── README.md          # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with Google Fonts (Poppins)
- **JavaScript (ES6+)**: Async/await API integration
- **Bootstrap 5**: Responsive grid system and components
- **EmailValidation.io API**: Email validation service

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ivalidate.git
   cd ivalidate
   ```

2. **Open the project**
   ```bash
   # Simply open index.html in your browser
   open index.html
   
   # Or serve with a local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **API Configuration** (Optional)
   - The project uses a demo API key
   - For production use, replace the API key in `js/app.js`:
   ```javascript
   const key = "your_api_key_here";
   ```

## 💻 Usage

1. Open the application in your web browser
2. Enter an email address in the input field
3. Click the "Validate" button
4. View the validation results with detailed information

### Example Results

**Valid Email** ✅
- Status: Deliverable
- Domain: Active
- Format: Valid

**Risky Email** ⚠️
- Status: Risky
- Reason: Disposable domain
- Recommendation: Use with caution

**Invalid Email** ❌
- Status: Invalid
- Reason: Domain not found
- Action: Email cannot be delivered

## 🎨 Design Features

- **Glassmorphism UI**: Modern translucent cards with backdrop blur
- **Gradient Background**: Subtle gradient from light gray to blue-gray
- **Smooth Animations**: Fade-in effects and hover transitions
- **Typography**: Poppins font family for modern readability
- **Color Coding**: Intuitive status colors (green/yellow/red)

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Desktop**: Full-width layout with centered form
- **Tablet**: Optimized spacing and button sizes
- **Mobile**: Stacked layout with touch-friendly controls

## 🔒 Security Notes

- API key is exposed in frontend code (suitable for demo purposes)
- For production deployment, consider:
  - Using environment variables
  - Implementing a backend proxy
  - Rate limiting API requests

## 🛡️ Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 API Information

This project uses the [EmailValidation.io](https://emailvalidation.io/) API which provides:
- Email deliverability checking
- Domain validation
- Syntax verification
- Risk assessment
- Real-time results

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- API key should be secured for production use
- Add error handling for network failures
- Consider adding input validation before API calls

## 🔮 Future Enhancements

- [ ] Bulk email validation
- [ ] Export results to CSV
- [ ] Email suggestion feature
- [ ] Dark/light theme toggle
- [ ] User authentication
- [ ] API usage analytics

## 📞 Contact

Created by [Your Name] - feel free to contact me!

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- Website: [yourwebsite.com](https://yourwebsite.com)

---

⭐ If you found this project helpful, please give it a star!