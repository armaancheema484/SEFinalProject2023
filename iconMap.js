export const ICON_MAP = new Map()

addMapping([0, 1], "3375693_emoticon_happy_smile_smiley_sun_icon")
addMapping([2], "3375691_cloudy_emoticon_happy_smiley_sun_icon")
addMapping([3], "3375695_cloud_cloudy_emoticon_smile_smiley_icon")
addMapping([45, 48], "1530368_weather_clouds_cloudy_fog_foggy_icon")
addMapping(
  [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82],
  "3375694_cloud_cry_emoticon_rain_smiley_icon"
)
addMapping([71, 73, 75, 77, 85, 86], "3375690_coud_emoticon_smiley_snow_weather_icon")
addMapping([95, 96, 99], "3375692_angry_cloud_emoticon_smiley_thunder_icon")

function addMapping(values, icon) {
  values.forEach(value => {
    ICON_MAP.set(value, icon)
  })
}