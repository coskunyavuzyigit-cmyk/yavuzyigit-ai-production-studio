#!/usr/bin/env bash
set -euo pipefail

OUT="${1:-output/yavuzyigit-studio-demo.mp4}"
mkdir -p "$(dirname "$OUT")" output/.frames
FONT="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
BOLD="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "FFmpeg is required." >&2
  exit 1
fi
if [[ ! -f "$FONT" || ! -f "$BOLD" ]]; then
  echo "DejaVu fonts are required." >&2
  exit 1
fi

render_scene() {
  local index="$1" title="$2" subtitle="$3" accent="$4"
  local frame="output/.frames/scene-${index}.mp4"
  local title_file="output/.frames/title-${index}.txt"
  local subtitle_file="output/.frames/subtitle-${index}.txt"
  printf '%b' "$title" > "$title_file"
  printf '%b' "$subtitle" > "$subtitle_file"

  ffmpeg -hide_banner -loglevel error -y \
    -f lavfi -i "color=c=0x101820:s=1080x1920:r=25:d=6" \
    -vf "drawbox=x=72:y=130:w=936:h=1660:color=0x263746@0.35:t=3,drawbox=x=72:y=130:w=18:h=1660:color=${accent}@1:t=fill,drawbox=x=140:y=610:w=800:h=2:color=0xc9a66b@0.9:t=fill,drawtext=fontfile=$BOLD:textfile=$title_file:fontcolor=white:fontsize=72:line_spacing=20:x=140:y=690:shadowcolor=black@0.7:shadowx=2:shadowy=3,drawtext=fontfile=$FONT:textfile=$subtitle_file:fontcolor=0xe3e6e8:fontsize=34:line_spacing=16:x=140:y=950:shadowcolor=black@0.7:shadowx=2:shadowy=3,drawtext=fontfile=$BOLD:text='YAVUZYİĞİT  /  AI STUDIO':fontcolor=0xc9a66b:fontsize=25:x=140:y=1680,drawtext=fontfile=$FONT:text='TEMSİLİ DEMO  -  GERÇEK İLAN DEĞİL':fontcolor=0xaeb7bf:fontsize=20:x=140:y=1740,fade=t=in:st=0:d=0.8,fade=t=out:st=5.2:d=0.8,format=yuv420p" \
    -an -c:v libx264 -preset veryfast -crf 22 -movflags +faststart "$frame"
}

render_scene 01 "ARSA\nHİKÂYESİ" "Her iyi proje, doğru konumla başlar." "0xc9a66b"
render_scene 02 "KONUMU\nKEŞFET" "Çevre ve ulaşım bilgileri kaynakla doğrulanır." "0x6a9fb5"
render_scene 03 "HAYALİNİ\nTASARLA" "Mimari konsept görselleri temsili olarak sunulur." "0x9a866c"
render_scene 04 "DETAYLAR\nÖNEMLİDİR" "Ölçü, tapu ve imar bilgisi belgeye dayanır." "0x7b9b83"
render_scene 05 "YAVUZYİĞİT\nGAYRİMENKUL" "Önce doğruluk. Sonra sinema." "0xc9a66b"

ffmpeg -hide_banner -loglevel error -y \
  -i output/.frames/scene-01.mp4 -i output/.frames/scene-02.mp4 \
  -i output/.frames/scene-03.mp4 -i output/.frames/scene-04.mp4 \
  -i output/.frames/scene-05.mp4 \
  -filter_complex "[0:v][1:v][2:v][3:v][4:v]concat=n=5:v=1:a=0,format=yuv420p[v]" \
  -map "[v]" -an -c:v libx264 -preset veryfast -crf 22 -movflags +faststart "$OUT"

ffprobe -v error -select_streams v:0 -show_entries stream=width,height,codec_name -show_entries format=duration -of default=noprint_wrappers=1 "$OUT"
echo "Rendered demo: $OUT"
