
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Fri, 29 May 2020 23:02:53 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorInk,
ColorBg,
ColorAction,
ColorPositive,
ColorNegative
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
