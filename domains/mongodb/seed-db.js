
const SeedDB = {
  user: {
    email: "admin@invitation.com",
    username: "admin",
    password: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2", //123qwe
    password_confirm: "$2b$10$VhmfGtzS9/IZPQuLQhmXkeTZmXrHYjIV2HCRfsOEp66Yk/OJiwow2",
    role: "admin"
  },
  dataConfig: {
    male: {
      name: "Đoàn Minh Đức",
      parent: {
        father: "Đoàn Văn Đề",
        mother: "Đào Thị Hoài"
      },
      location: {
        text: "Vũ Vinh - Vũ Thư - Thái Bình",
        map: "https://maps.app.goo.gl/TqdyTRvC4tdRdBx99"
      },
      time_start: {
        date: {
          lunar: {
            day: "02",
            month: "12",
            year: "2023"
          },
          day_of_week: "chủ nhật",
          solar: {
            day: "20",
            month: "10",
            year: "2023"
          }
        },
        time: {
          hour: "16",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "BIDV",
        provider_number: "1207386617",
        holder_name: "Đoàn Minh Đức"
      }, {
        provider_name: "Techcombank",
        provider_number: "19035849599010",
        holder_name: "Đoàn Minh Đức"
      }],
      email: "ducdm.aptech@gmail.com",
      phone: "0974255602",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg',
      srcAudio: '/assets/audio/EmDongYIDo-DucPhucx911-9034315.mp3'
    },
    female: {
      name: "Nguyễn Thị Hải Yến",
      parent: {
        father: "Nguyễn Văn Khánh",
        mother: "Nguyễn Thị Mơ"
      },
      location: {
        text: "Phú Túc - Phú Xuyên - Hà Nội",
        map: "https://maps.app.goo.gl/M8J8D67kCQrg1VWd9"
      },
      time_start: {
        date: {
          lunar: {
            day: "02",
            month: "12",
            year: "2023"
          },
          day_of_week: "chủ nhật",
          solar: {
            day: "20",
            month: "10",
            year: "2023"
          }
        },
        time: {
          hour: "10",
          minute: "00"
        }
      },
      finances: [{
        provider_name: "Techcombank",
        provider_number: "19031442271031",
        holder_name: "Nguyễn Thị Hải Yến"
      }],
      email: "nguyenthihaiyen120997@gmail.com",
      phone: "0338039998",
      bg: '/assets/images/bg.jpg',
      bg_fb: '/assets/images/bg-fb.jpg'
    },
    default: true
  }
};

module.exports = SeedDB;
