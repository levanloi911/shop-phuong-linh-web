import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Truck } from "lucide-react";
import { useState } from "react";
import OrderForm from "@/components/OrderForm";
import ProductCard from "@/components/ProductCard";

/**
 * DESIGN PHILOSOPHY: Luxury Minimalist
 * - Cream white background with rose gold accents
 * - Serif fonts (Playfair Display) for headings, sans-serif (Lato) for body
 * - Generous whitespace and asymmetric layout
 * - Smooth hover effects and subtle animations
 */

const PRODUCTS = [
  {
    id: 1,
    name: "Lắc Tay Louis Vuitton Vàng",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/813e8a4b4fd2c18c98c312_12762257.jpg",
    price: 199000,
    description:
      "Lắc tay Louis Vuitton mạ vàng với thiết kế hình thoi và tròn sang trọng. Bảo hành 12 tháng.",
  },
  {
    id: 2,
    name: "Lắc Tay Chanel Bạc",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/a8837b93be0a3054691b11_a6841640.jpg",
    price: 199000,
    description:
      "Lắc tay Chanel bạc với logo tròn kết hợp. Thiết kế tinh tế, đeo lên tay rất sang. Bảo hành 12 tháng.",
  },
  {
    id: 3,
    name: "Lắc Tay Louis Vuitton Vàng Hoa Văn",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/c226e9342cada2f3fbbc10_5d0ef058.jpg",
    price: 189000,
    description:
      "Lắc tay Louis Vuitton mạ vàng với thiết kế phức tạp. Bảo hành 12 tháng.",
  },
  {
    id: 4,
    name: "Lắc Tay Cartier Bạc Nữ Tính",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/794b085ccdc5439b1ad49_e10ff5b0.jpg",
    price: 129000,
    description:
      "Lắc tay Cartier bạc với đá, thiết kế vòng tròn sang trọng. Bảo hành 12 tháng.",
  },
  {
    id: 5,
    name: "Lắc Tay Van Cleef Vàng",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/aced51c7945e1a00434f8_f13b1c0c.jpg",
    price: 149000,
    description:
      "Lắc tay Van Cleef mạ vàng dài với thiết kế hoa văn đen tinh tế. Bảo hành 12 tháng.",
  },
  {
    id: 6,
    name: "Lắc Tay Chanel Vàng Bạc",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/52d785fa4063ce3d97727_2d1e860a.jpg",
    price: 199000,
    description:
      "Lắc tay Chanel với 2 màu vàng và bạc kết hợp. Thiết kế tròn sang trọng. Bảo hành 12 tháng.",
  },
  {
    id: 7,
    name: "Lắc Tay Chanel Vàng Bạc Vòng",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/616329a7ef3e6160382f1_e3a668c3.jpg",
    price: 199000,
    description:
      "Lắc tay Chanel vàng bạc kết hợp với thiết kế vòng tròn. Bảo hành 12 tháng.",
  },
  {
    id: 8,
    name: "Lắc Tay Cartier Vàng",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/6b43d47011e99fb7c6f82_853c28a3.jpg",
    price: 199000,
    description:
      "Lắc tay Cartier mạ vàng với thiết kế sang trọng. Đeo lên tay nhìn sang hẳn. Bảo hành 12 tháng.",
  },
  {
    id: 9,
    name: "Lắc Tay Louis Vuitton Vàng Bạc",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/41e955c5905c1e02474d6_81bb91d5.jpg",
    price: 199000,
    description:
      "Lắc tay Louis Vuitton với 2 màu vàng và bạc. Thiết kế phức tạp với logo LV. Bảo hành 12 tháng.",
  },
  {
    id: 10,
    name: "Lắc Tay Cartier Bạc Nữ",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/078a49bb8c22027c5b333_3f78d967.jpg",
    price: 199000,
    description:
      "Lắc tay Cartier bạc với thiết kế nữ tính. Bảo hành 12 tháng.",
  },
  {
    id: 11,
    name: "Lắc Tay Cartier Bạc nữ 2",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/ce940eb5cb2c45721c3d5_81279749.jpg",
    price: 199000,
    description:
      "Lắc tay Cartier bạc kết hợp đen. Thiết kế sang trọng. Bảo hành 12 tháng.",
  },
  {
    id: 12,
    name: "Lắc Tay Cartier Vàng 2",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/46e5cbd90e40801ed9514_4804bb82.jpg",
    price: 189000,
    description:
      "Lắc tay Cartier mạ vàng kết hợp đỏ. Thiết kế vòng tròn sang trọng. Bảo hành 12 tháng.",
  }
];

const BANNER_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663445984792/SqW9PqmxdrnrgsRfNo6eRS/banner_shop_14824a5b.webp";

export default function Home() {
  const [selectedProducts, setSelectedProducts] = useState<
    Array<{ id: number; name: string; price: number }>
  >([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProductSelect = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    setSelectedProducts([...selectedProducts, product]);
    setShowOrderForm(true);
  };

  const handleRemoveProduct = (productId: number) => {
    setSelectedProducts(
      selectedProducts.filter((p) => p.id !== productId)
    );
  };

  const handleSubmitOrder = async (formData: {
    name: string;
    phone: string;
    address: string;
    products: Array<{ id: number; name: string; price: number }>;
  }) => {
    setIsSubmitting(true);
    try {
      // Prepare message content - shortened for mobile compatibility
      const productList = formData.products
        .map((p) => `${p.name} - ${p.price.toLocaleString("vi-VN")}₫`)
        .join("\n");

      const totalPrice = formData.products.reduce((sum, p) => sum + p.price, 0);

      // Shorter message format for better mobile compatibility
      const message = `ĐƠN ĐẶT HÀNG\n\nKhách: ${formData.name}\nSĐT: ${formData.phone}\nĐC: ${formData.address}\n\nSản phẩm:\n${productList}\n\nTổng: ${totalPrice.toLocaleString("vi-VN")}₫`;

      // Open Facebook Messenger with pre-filled message
      // Using encodeURIComponent with proper error handling for mobile
      const messengerUrl = `https://m.me/61588272323420?text=${encodeURIComponent(message)}`;
      
      // Try to open Messenger
      const win = window.open(messengerUrl, "_blank", "noopener,noreferrer");
      
      // Fallback: if window.open fails or returns null, try alternative method
      if (!win) {
        // Try direct m.me link without message parameter
        window.location.href = `https://m.me/61588272323420`;
      }

      // Reset form after a short delay
      setTimeout(() => {
        setSelectedProducts([]);
        setShowOrderForm(false);
        alert("Đơn hàng của bạn đã được gửi! Vui lòng hoàn tất trò chuyện trên Messenger.");
      }, 500);
    } catch (error) {
      console.error("Error submitting order:", error);
      // Fallback: open Messenger without message
      window.open(`https://m.me/61588272323420`, "_blank");
      alert("Vui lòng gửi thông tin đơn hàng trên Messenger. Xin lỗi vì sự bất tiện!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header / Navigation */}
      <header className="sticky top-0 bg-white border-b border-border z-40">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-foreground">
                Shop Phương Linh
              </h1>
              <p className="text-xs text-muted-foreground">Trang Sức Cao Cấp</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-4">
            <a
              href="https://m.me/61588272323420"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Nhắn Tin</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 py-16 lg:py-24 bg-background">
            <div className="max-w-md space-y-6">
              <div className="space-y-3">
                <p className="text-primary text-sm font-semibold tracking-widest uppercase">
                  ✨ Trang Sức Cao Cấp
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Lắc Tay Cartier
                </h1>
                <p className="text-lg text-muted-foreground font-light">
                  Con gái không cần quá nhiều tiền... chỉ cần một món trang sức
                  xinh là đủ tự tin ❤️
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <Truck className="w-5 h-5 text-primary" />
                  <span>Freeship toàn quốc</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>Bảo hành 12 tháng</span>
                </div>
              </div>

              <Button
                onClick={() =>
                  document
                    .getElementById("products")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm h-12 mt-8"
              >
                Khám Phá Bộ Sưu Tập
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-96 lg:h-auto min-h-96 lg:min-h-screen overflow-hidden">
            <img
              src={BANNER_IMAGE}
              alt="Shop Phương Linh"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/20" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border" />

      {/* Products Section */}
      <section id="products" className="py-20 lg:py-28 bg-background">
        <div className="container">
          {/* Section Header */}
          <div className="max-w-2xl mb-16 space-y-4">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase">
              Bộ Sưu Tập
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Những Mẫu Lắc Tay Được Yêu Thích chỉ 199.000
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Mỗi chiếc lắc tay được chọn lọc kỹ càng, mang đến vẻ đẹp sang
              trọng và tự tin cho bạn.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onSelect={handleProductSelect}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white border-t border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Chất Lượng Cao Cấp
              </h3>
              <p className="text-muted-foreground">
                Bạc sáng, đeo lâu không xỉn. Mỗi chiếc lắc tay được kiểm tra
                kỹ lưỡng trước khi gửi đến bạn.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Freeship Toàn Quốc
              </h3>
              <p className="text-muted-foreground">
                Miễn phí vận chuyển cho tất cả đơn hàng trên toàn quốc. Giao
                hàng nhanh chóng và an toàn.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Hỗ Trợ 24/7
              </h3>
              <p className="text-muted-foreground">
                Liên hệ với chúng tôi qua Messenger bất kỳ lúc nào để được tư
                vấn và hỗ trợ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sẵn Sàng Tìm Chiếc Lắc Tay Hoàn Hảo?
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Hãy chọn sản phẩm yêu thích của bạn và liên hệ với chúng tôi qua
              Messenger. Chúng tôi sẽ giúp bạn hoàn tất đơn hàng.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm h-12 px-8"
            >
              Xem Bộ Sưu Tập
            </Button>
            <a
              href="https://m.me/61588272323420"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="w-full bg-white border-border hover:bg-secondary text-foreground rounded-sm h-12 px-8"
              >
                Nhắn Tin Với Chúng Tôi
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    P
                  </span>
                </div>
                <span className="font-semibold text-foreground">
                  Shop Phương Linh
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Trang sức cao cấp với chất lượng tốt nhất.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Liên Kết</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=61588272323420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Facebook Page
                  </a>
                </li>
                <li>
                  <a
                    href="https://m.me/61588272323420"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Messenger
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Liên Hệ</h4>
              <p className="text-sm text-muted-foreground">
                Hà Nội, Việt Nam
              </p>
              <a
                href="https://m.me/61588272323420"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm font-medium">Nhắn Tin Ngay</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-6" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>
              © 2026 Shop Phương Linh. Tất cả quyền được bảo lưu.
            </p>
          </div>
        </div>
      </footer>

      {/* Order Form Modal */}
      {showOrderForm && (
        <OrderForm
          selectedProducts={selectedProducts}
          onClose={() => {
            setShowOrderForm(false);
            setSelectedProducts([]);
          }}
          onSubmit={handleSubmitOrder}
          isLoading={isSubmitting}
        />
      )}
    </div>
  );
}
