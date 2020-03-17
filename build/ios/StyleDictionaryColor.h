
//
// StyleDictionaryColor.h
//
// Do not edit directly
// Generated on Mon, 16 Mar 2020 23:36:55 GMT
//

#import <UIKit/UIKit.h>


typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorInk,
ColorAction,
ColorPositive,
ColorNegative
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
