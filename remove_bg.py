from PIL import Image
from rembg import remove

# 读取输入图像
input_path = 'logo.jpg'
output_path = 'logo_no_bg.png'

# 打开图像
input_image = Image.open(input_path)

# 移除背景
output_image = remove(input_image)

# 保存结果
output_image.save(output_path) 