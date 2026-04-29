import os
import re

root_dir = r"c:\Users\Anand\Desktop\nithin files\gym\gym-website-react"
src_dir = os.path.join(root_dir, "src")
public_dir = os.path.join(root_dir, "public")

def get_all_files(directory):
    file_list = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            rel_path = os.path.relpath(os.path.join(root, file), public_dir)
            file_list.append(rel_path.replace("\\", "/"))
    return file_list

images_dir = os.path.join(public_dir, "images")
videos_dir = os.path.join(public_dir, "videos")

all_assets = get_all_files(images_dir) + get_all_files(videos_dir)

# Read all code files
code_content = ""
for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith((".js", ".jsx", ".ts", ".tsx", ".css", ".html")):
            with open(os.path.join(root, file), 'r', encoding='utf-8', errors='ignore') as f:
                code_content += f.read()

unused_assets = []

for asset in all_assets:
    filename = os.path.basename(asset)
    
    # We want to find cases where the asset is explicitly referenced.
    # Case 1: "/images/.../filename"
    # Case 2: "filename" (as a standalone string in quotes)
    
    # Search for the full path (starting with /)
    path_pattern = re.escape("/" + asset)
    # Search for the filename in quotes or after a slash
    file_pattern = rf'["\'/]{re.escape(filename)}["\']'
    
    if re.search(path_pattern, code_content) or re.search(file_pattern, code_content):
        pass # Used
    else:
        unused_assets.append(asset)

print("UNUSED ASSETS:")
for asset in unused_assets:
    print(asset)

print("\nTOTAL UNUSED:", len(unused_assets))
