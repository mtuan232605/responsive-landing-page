import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      aboutUs: {
        navBar: "ABOUT US",
        title: "About Us",
        description: "Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.",
        users: "Users",
        games: "Games",
        "24Hours": "24 - Hours",
        "24HoursDescription": "24/7 access ensures operators' businesses run smoothly all year long.",
        design: "Design",
        designDescription: "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.",
        team: "Team",
        teamDescription: "Etech is an award-winning, international studio of designers, artists, animators, and producers that create content for the biggest names in film and video games.",
      },
      games: {
        navBar: "GAMES",
        title: "Our Games",
        description: "As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects, and magnificent animation that never cease to impress.",
      },
      partners: {
        navBar: "PARTNERS",
        title: "Our Partners",
      },
      contactUs: "CONTACT US",
      weAreGettingReadyDesktop: "We’re Getting Ready",
      weAreGettingReadyMobile: "We’re\n Getting Ready",
      weAreGettingReady: "We’re Getting Ready",
      greeting: "We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.",
      placeholderEmailInput: "Enter your email",
      subscribe: "Subscribe",
      footer: {
        address: {
          title: "Address",
          address1: "Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US",
          address2: "20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam"
        },
        phoneNumber: "(+1) 555-0108-000 or (+236) 555-0108",
        subscribe: {
          title: "Subscribe",
          description: "Subscribe to our newsletter and be the first to know about our updates"
        },
      },
      coutndown: {
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
      }
    }
  },
  vi: {
    translation: {
      aboutUs: {
        navBar: "VỀ CHÚNG TÔI",
        title: "Về Chúng Tôi",
        description: "Duyệt qua tuyển chọn các trò chơi trực tuyến miễn phí của chúng tôi và có một khoảng thời gian tuyệt vời mà không cần rời khỏi trang web! Tùy chọn Trò chơi dành cho Trẻ em của chúng tôi cũng bao gồm các bài đánh giá trò chơi, các trò chơi gian lận và hướng dẫn mở rộng, và nhiều hơn nữa. Chúng tôi cũng có các bản tải xuống, video và bài báo miễn phí độc quyền. Etech đánh giá các trò chơi trẻ em phổ biến nhất từ tất cả các nền tảng trò chơi điện tử phổ biến nhất, vì vậy bạn không cần phải tìm kiếm niềm vui ở bất kỳ nơi nào khác trên Internet. Khám phá một thế giới trò chơi hoàn toàn mới trên Etech.",
        users: "Người chơi",
        games: "Trò chơi",
        "24Hours": "Truy Cập 24/7",
        "24HoursDescription": "Đảm bảo hoạt động kinh doanh của các nhà khai thác hoạt động trơn tru suốt cả năm. ",
        design: "Thiết kế",
        designDescription: "Kết hợp các vũ trụ giàu trí tưởng tượng, động lực chơi và lối chơi chưa từng có, trò chơi của chúng tôi vượt qua ranh giới của thế giới ảo bằng cách tạo ra lối chơi sáng tạo. ",
        team: "Đội ngũ",
        teamDescription: "Etech là một studio quốc tế, từng đoạt giải thưởng gồm các nhà thiết kế, nghệ sĩ, họa sĩ hoạt hình và nhà sản xuất chuyên tạo ra nội dung cho những tên tuổi lớn nhất trong lĩnh vực điện ảnh và trò chơi điện tử.",
      },
      games: {
        navBar: "TRÒ CHƠI",
        title: "Trò Chơi",
        description: "Là nhà tiên phong trong lĩnh vực trò chơi ứng dụng dành cho thiết bị di động, chúng tôi tự hào về tính độc đáo và cá tính, cung cấp cho người chơi toàn cầu những trò chơi hiện đại có cốt truyện tuyệt vời, hiệu ứng âm thanh giật gân và hoạt ảnh hoành tráng không ngừng gây ấn tượng.",
      },
      partners: {
        navBar: "ĐỐI TÁC",
        title: "Đối Tác",
      },
      contactUs: "LIÊN HỆ",
      weAreGettingReadyDesktop: "Trò chơi sắp ra mắt",
      weAreGettingReadyMobile: "Trò chơi\n sắp ra mắt",
      greeting: "Chúng tôi sẽ trở lại với một điều tuyệt vời. Để nhận các bản cập nhật mới nhất về trò chơi, vui lòng đăng ký nhận bản tin của chúng tôi.",
      placeholderEmailInput: "Địa chỉ email của bạn",
      footer: {
        address: {
          title: "Địa chỉ",
          address1: "Valletta Buildings, South Street, Valletta - VLT 1103 Malta, Mỹ",
          address2: "Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà Nẵng, Việt Nam"
        },
        phoneNumber: "(+1) 555-0108-000 hoặc (+236) 555-0108",
        subscribe: {
          title: "Đăng Ký",
          description: "Đăng ký nhận bản tin của chúng tôi và là người đầu tiên biết về các cập nhật của chúng tôi"
        },
      },
      coutndown: {
        days: "Ngày",
        hours: "Giờ",
        minutes: "Phút",
        seconds: "Giây",
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
