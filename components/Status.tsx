import { statusPropsType } from "@/Types/updatesType";
import { formatTime } from "@/utils/formatter";
import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

interface statusPropType {
  status: statusPropsType[];
}

interface Props {
  imageUri: string;
  circleSize: number;
  statusesCount: number;
  ringColor: string;
  ringWidth: number;
}

const SegmentedAvatar: React.FC<Props> = ({
  imageUri,
  circleSize,
  statusesCount,
  ringColor,
  ringWidth,
}) => {
  const radius = circleSize / 2;
  const ringRadius = radius + ringWidth / 2;
  const circumference = 2 * Math.PI * ringRadius;
  const segmentLength = circumference / statusesCount;
  const gapLength = segmentLength * 0.15;
  const dashLength = segmentLength - gapLength;

  return (
    <View
      style={{
        width: circleSize + ringWidth * 2,
        height: circleSize + ringWidth * 2,
      }}
    >
      <Svg
        width={circleSize + ringWidth * 2}
        height={circleSize + ringWidth * 2}
        viewBox={`0 0 ${circleSize + ringWidth * 2} ${circleSize + ringWidth * 2}`}
      >
        <G
          rotation="-90"
          origin={`${ringRadius + ringWidth}, ${ringRadius + ringWidth}`}
        >
          <Circle
            cx={ringRadius + ringWidth}
            cy={ringRadius + ringWidth}
            r={ringRadius}
            stroke={ringColor}
            strokeWidth={ringWidth}
            strokeDasharray={`${dashLength} ${gapLength}`}
            fill="transparent"
          />
        </G>
      </Svg>

      <Image
        source={{ uri: imageUri }}
        style={{
          position: "absolute",
          top: ringWidth,
          left: ringWidth,
          width: circleSize,
          height: circleSize,
          borderRadius: circleSize / 2,
          borderWidth: 2.5,
          borderColor: "#FFFFFF",
        }}
      />
    </View>
  );
};

const RenderItem: FC<statusPropsType> = ({
  Name,
  statusImageUrl,
  time,
  viewed,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center py-3"
      activeOpacity={0.7}
    >
      <SegmentedAvatar
        circleSize={56}
        imageUri={statusImageUrl[0]}
        ringColor={viewed ? "#D1D5DB" : "#F97316"}
        ringWidth={2.5}
        statusesCount={statusImageUrl.length}
      />

      <View className="flex-1 ml-3">
        <Text
          className={`text-base ${viewed ? "text-gray-600" : "text-gray-900 font-semibold"}`}
        >
          {Name}
        </Text>
        <Text className="text-gray-400 text-sm mt-0.5">{formatTime(time)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Status: FC<statusPropType> = ({ status }) => {
  const unseenStatus: statusPropsType[] = status
    ? status.filter((data) => !data.viewed)
    : [];
  const viewedStatus: statusPropsType[] = status
    ? status.filter((data) => data.viewed)
    : [];

  return (
    <View className="p-6">
      {/* Recent Updates */}
      {unseenStatus && unseenStatus.length > 0 && (
        <View className="mb-4">
          <Text className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wide">
            Recent updates
          </Text>
          {unseenStatus.map(({ statusImageUrl, time, viewed, Name }, idx) => (
            <RenderItem
              key={idx}
              Name={Name}
              statusImageUrl={statusImageUrl}
              time={time}
              viewed={viewed}
            />
          ))}
        </View>
      )}

      {/* Viewed Updates */}
      {viewedStatus && viewedStatus.length > 0 && (
        <View className="mb-4">
          <Text className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wide">
            Viewed updates
          </Text>
          {viewedStatus.map(({ statusImageUrl, time, viewed, Name }, idx) => (
            <RenderItem
              key={idx}
              Name={Name}
              statusImageUrl={statusImageUrl}
              time={time}
              viewed={viewed}
            />
          ))}
        </View>
      )}

      {/* Empty State */}
      {unseenStatus.length === 0 && viewedStatus.length === 0 && (
        <View className="items-center justify-center py-12">
          <Text className="text-gray-400 text-base">
            No status updates available
          </Text>
        </View>
      )}
    </View>
  );
};

export default Status;
