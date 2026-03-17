import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { useState } from "react";

interface OrderFormProps {
  selectedProducts: Array<{ id: number; name: string; price: number }>;
  onClose: () => void;
  onSubmit: (formData: {
    name: string;
    phone: string;
    address: string;
    products: Array<{ id: number; name: string; price: number }>;
  }) => void;
  isLoading?: boolean;
}

export default function OrderForm({
  selectedProducts,
  onClose,
  onSubmit,
  isLoading = false,
}: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const totalPrice = selectedProducts.reduce((sum, p) => sum + p.price, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Vui lòng điền đầy đủ thông tin");
      return;
    }
    onSubmit({
      ...formData,
      products: selectedProducts,
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border p-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Thông Tin Đặt Hàng</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Selected Products Summary */}
          <div className="bg-secondary/50 rounded-sm p-4 space-y-2">
            <h3 className="font-semibold text-foreground mb-3">Sản Phẩm Đã Chọn</h3>
            {selectedProducts.map((product) => (
              <div
                key={product.id}
                className="flex justify-between text-sm text-foreground"
              >
                <span>{product.name}</span>
                <span className="font-medium">
                  {product.price.toLocaleString("vi-VN")}₫
                </span>
              </div>
            ))}
            <div className="border-t border-border pt-2 mt-3 flex justify-between font-semibold">
              <span>Tổng Cộng:</span>
              <span className="text-primary">
                {totalPrice.toLocaleString("vi-VN")}₫
              </span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground font-medium">
                Họ Và Tên
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Nhập họ và tên"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border-border focus:ring-primary"
                disabled={isLoading}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-medium">
                Số Điện Thoại
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Nhập số điện thoại"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="border-border focus:ring-primary"
                disabled={isLoading}
              />
            </div>

            {/* Address */}
            <div className="space-y-2">
              <Label htmlFor="address" className="text-foreground font-medium">
                Địa Chỉ Giao Hàng
              </Label>
              <Textarea
                id="address"
                placeholder="Nhập địa chỉ giao hàng"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="border-border focus:ring-primary min-h-24 resize-none"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isLoading}
            >
              Hủy
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isLoading}
            >
              {isLoading ? "Đang Gửi..." : "Gửi Đơn Hàng"}
            </Button>
          </div>

          {/* Info Text */}
          <p className="text-xs text-muted-foreground text-center">
            Thông tin của bạn sẽ được gửi qua Messenger của Shop Phương Linh
          </p>
        </form>
      </div>
    </div>
  );
}
